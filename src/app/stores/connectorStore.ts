import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { ChargerData, QRConnector } from "../models/connector";

export default class ConnectorStore {
  scannedConnector: QRConnector | null = null;
  loading = false;
  connectors: ChargerData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getConnector = async (data: string) => {
    this.connectors = [];
    this.setLoading(true);
    try {
      const connector: QRConnector = await agent.Connectors.getByQr(data);
      runInAction(() => (this.scannedConnector = connector));
      this.setLoading(false);
    } catch (error) {
      console.log(error);
      this.setLoading(false);
    }
  };

  getChargerInfo = async (id: number) => {
    try {
      const newConnectors = await agent.Connectors.getByChargerId(id);
      runInAction(() => (this.connectors = newConnectors));
    } catch (error) {
      console.log(error);
    }
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  setConnector = () => {
    this.scannedConnector = null;
  };
}
