export interface QRConnector {
  id: number;
  chargerAddress: string;
  connectorType: string;
  price: number;
  currencyISO: string;
  currentType: string;
  maxPowerKw: number;
}

export interface ChargerData {
  id: number;
  ocppChargerId: string;
  connectorStatus: string;
  connectorName: string;
  connectorType: string;
  electricCurrent: string;
  pricePerKwh: string;
  currencyIso: string;
  qrString: string;
}
