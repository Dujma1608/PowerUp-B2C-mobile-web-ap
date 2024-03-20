import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/mobileAgent";
import { ChargerData, QRConnector } from "../models/connector";
import webAgent from "../../WebApp/api/webAgent";

export default class ConnectorStore {
  scannedConnector: QRConnector | null = null;
  webScannedConnector: QRConnector | null = null;
  loading = false;
  connectors: ChargerData[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  setScannedConnector = (value: any) => (this.scannedConnector = value);
  setWebScannedConnector = (value: any) => (this.webScannedConnector = value);

  getConnector = async (data: string) => {
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

  getWebConnector = async (data: string) => {
    this.setLoading(true);
    try {
      const connector: QRConnector = await webAgent.Connectors.getByQr(data);
      runInAction(() => (this.webScannedConnector = connector));
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
}
