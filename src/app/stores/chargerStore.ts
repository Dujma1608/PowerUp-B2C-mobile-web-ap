import { makeAutoObservable, runInAction } from "mobx";
import { Charger } from "../models/charger";
import agent from "../api/agent";
import * as signalR from "@microsoft/signalr";

export default class ChargerStore {
  chargerRegistry = new Map<number, Charger>();
  selectedCharger: Charger | undefined = undefined;
  loadingInitial = false;
  connection: signalR.HubConnection | null = null;
  url = "https://api-test.power-up.green/hubs/connectorStatus";

  constructor() {
    makeAutoObservable(this);
  }

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

  createHubConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(this.url, {
        withCredentials: false,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    console.log("Connection status", this.connection.state);

    this.connection?.on("updateConnectorStatus", (connectorId, status) => {
      console.log(`Status for ${connectorId} is ${status}`);
    });

    if (this.connection) {
      this.connection
        .start()
        .then(() => {
          console.log("SignalR Connected", this.connection?.state);
          this.subscribe(["17", "18"]);
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
