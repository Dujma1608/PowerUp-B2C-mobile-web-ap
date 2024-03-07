import { Capacitor } from "@capacitor/core";
import { makeAutoObservable } from "mobx";

export default class RegularStore {
  isCharging: boolean = false;
  isRegistered: boolean = false;
  mapCenter: [number, number] = [45.798, 15.9611];
  mapZoom: number = 12;
  search: boolean = false;
  isWeb: boolean = Capacitor.getPlatform() === "web";
  paymentFinished: boolean = false;
  userLocation: { lat: number; lon: number } | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsCharging = (value: boolean) => {
    this.isCharging = value;
  };

  setIsRegistered = (value: boolean) => {
    this.isRegistered = value;
  };

  setSearch = (value: boolean) => {
    this.search = value;
  };
  setPaymentFinished = (value: boolean) => {
    this.paymentFinished = value;
  };
  setMapCenter = (lat: number, lon: number) => {
    this.mapCenter = [lat, lon];
  };
  setMapZoom = (value: number) => {
    this.mapZoom = value;
  };
  setUserLocation = (lat: number, lon: number) => {
    this.userLocation = { lat, lon };
  };
}
