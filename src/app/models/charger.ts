export interface Charger {
  id: number;
  longitude: number;
  latitude: number;
  connectorsCount: number;
  availableConnectorsCount?: number;
  address: string;
  connectorIds: number[];
}
