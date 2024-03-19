import { User } from "./user";

export interface Session {
  id: number;
  connectorId: number;
  currentPower: number;
  currentCarBattery: number;
  currencyId: number;
  pricePerKwh: 0;
  timeStart: Date | null;
  timeStop: Date | null;
  user: User;
  connector: Connector;
}

export interface SessionHistory {
  stopDateTime: Date;
  pricePerKwh: number;
  currencyIso: string;
  totalPrice: number;
  electricityConsumed: number;
}

export interface SessionUpdate {
  sessionId: number;
  currentPower: number;
  currentSoC: number;
  currentPrice: number;
}
export interface FinishedSessionInfo {
  address: string;
  duration: string;
  email: string;
  energyConsumed: number;
  id: number;
  paymentCompleted: boolean;
  paymentMethod: string;
  pricePerKwh: number;
  timeStart: string;
  timeStop: string;
  totalPrice: number;
}

export interface InitialSessionInfo {
  address: string;
  connectorType: string;
  currencyIso: string | null;
  currentPower: number;
  currentPrice: number | null;
  currentSoC: number;
  currentType: string;
  energyConsumed: number | null;
  initialSoC: number;
  startDateTime: string;
  unitPrice: number;
}

interface Duration {
  ticks: number;
  days: number;
  hours: number;
  milliseconds: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
  totalMilliseconds: number;
  totalMinutes: number;
  totalSeconds: number;
}

interface CompanyMarket {
  id: number;
  companyId: number;
  name: string;
  iban: string;
  bankName: string;
  address: string;
  country: string;
  swiftCode: string;
  currencyId: number;
  storeId: number;
  isDeleted: number;
  company: {
    id: number;
    companyName: string;
    supportEmail: string;
    bankAccountId: number;
    street: string;
    city: string;
    postalNumber: string;
    country: string;
    baseUrl: string;
    companyMarkets: string[];
  };
  currency: {
    id: number;
    currencyISO: string;
    currencyFullName: string;
    currencySymbol: string;
  };
  chargers: string[];
  pricingGroups: {
    id: number;
    name: string;
    companyMarketId: number;
    companyMarket: string;
    pricesPerKwh: {
      id: number;
      value: number;
      currencyId: number;
      connectorId: number;
      dateTimeFrom: string;
      dateTimeTo: string;
      isActive: boolean;
      currency: {
        id: number;
        currencyISO: string;
        currencyFullName: string;
        currencySymbol: string;
      };
    }[];
    connectorsInPricingGroup: string[];
  }[];
}

interface Connector {
  id: number;
  ocppChargerId: string;
  ocppConnectorId: number;
  ocppEvseId: number;
  connectorTypeId: number;
  qrString: string;
  isDeleted: number;
  sessions: string[];
  charger: {
    id: number;
    ocppChargerId: string;
    companyMarketId: number;
    ocppVersion: string;
    longitude: number;
    latitude: number;
    description: string;
    street: string;
    city: string;
    postalNumber: string;
    country: string;
    model: string;
    vendor: string;
    firmwareVersion: string;
    dateTimeCreated: string;
    isDeleted: number;
    companyMarket: CompanyMarket;
    connectors: string[];
  };
  connectorType: {
    id: number;
    name: string;
    description: string;
  };
  connectorStatus: {
    ocppChargerId: string;
    ocppEvseId: number;
    ocppConnectorId: number;
    lastStatus: string;
    lastStatusTime: string;
    lastMeter: number;
    lastMeterTime: string;
    connector: string;
  };
  connectorsInPricingGroups: {
    id: number;
    connectorId: number;
    pricingGroupId: number;
    dateTimeFrom: string;
    dateTimeTo: string;
    isActive: boolean;
    pricingGroup: {
      id: number;
      name: string;
      companyMarketId: number;
      companyMarket: string;
      pricesPerKwh: {
        id: number;
        value: number;
        currencyId: number;
        connectorId: number;
        dateTimeFrom: string;
        dateTimeTo: string;
        isActive: boolean;
        currency: {
          id: number;
          currencyISO: string;
          currencyFullName: string;
          currencySymbol: string;
        };
      }[];
      connectorsInPricingGroup: string[];
    };
    connector: string;
  }[];
}

interface Currency {
  id: number;
  currencyISO: string;
  currencyFullName: string;
  currencySymbol: string;
}

export interface SessionResponse {
  id: number;
  connectorId: number;
  idTag: string;
  startTagId: string;
  stopTagId: string;
  currentPower: number;
  currentCarBattery: number;
  currencyId: number;
  pricePerKwh: number;
  meterStart: number;
  timeStart: Date;
  meterStop: number;
  timeStop: Date;
  stopReason: string;
  userId: number;
  subscriptionId: string;
  startResult: string;
  batteryCurveJson: string;
  powerCurveJson: string;
  totalPrice: number;
  duration: Duration;
  averagePower: number;
  connector: Connector;
  user: User;
  currency: Currency;
}
