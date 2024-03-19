import { makeAutoObservable, runInAction } from "mobx";
import { Charger } from "../models/charger";
import agent from "../api/mobileAgent";
import * as signalR from "@microsoft/signalr";
import { ChargerData } from "../models/connector";

export default class ChargerStore {
  chargerRegistry = new Map<number, Charger>();
  selectedCharger: Charger | undefined = undefined;
  loadingInitial = false;
  connection: signalR.HubConnection | null = null;
  url = "https://api-test.power-up.green/hubs/connectorStatus";
  connectorStatus = new Map<number, string>();
  connectors: ChargerData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getChargerInfo = async (id: number) => {
    try {
      const newConnectors = await agent.Connectors.getByChargerId(id);
      runInAction(() => (this.connectors = newConnectors));
    } catch (error) {
      console.log(error);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  loadChargers = async () => {
    this.setLoadingInitial(true);
    try {
      const chargers: Charger[] = await agent.Chargers.list();
      runInAction(() => {
        chargers.forEach((charger, index) => {
          this.chargerRegistry.set(charger.id, charger);
        });
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };
  updateConnectorStatus = (connectorId: number, status: string) => {
    this.connectorStatus.set(connectorId, status);
  };

  createHubConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(this.url, {
        withCredentials: false,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.connection?.on("updateConnectorStatus", (connectorId, status) => {
      runInAction(() => this.updateConnectorStatus(connectorId, status));
      console.log(`Status for ${connectorId} is ${status}`);
    });
    this.getChargerInfo(this.selectedCharger?.id!);

    if (this.connection) {
      this.connection
        .start()
        .then(() => {
          console.log("SignalR Connected", this.connection?.state);
          // this.connectors.forEach(connector => this.subscribe(connector.id))
          this.subscribe(["1", "2"]);
        })
        .catch((error) => {
          console.log("SignalR Connection Error: ", error);
        });
    }
  }

  subscribe = async (connectorId: string[]) => {
    await this.connection
      ?.invoke("Subscribe", connectorId)
      .catch((error) => console.log(error));
  };

  // stopConnection = () => {
  //   this.connection
  //     ?.stop()
  //     .then(() => console.log("Connection successfully closed."))
  //     .catch((error) =>
  //       console.error("Error while closing the connection", error)
  //     );
  // };
}
