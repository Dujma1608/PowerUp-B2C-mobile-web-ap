import { makeAutoObservable } from "mobx";
import { MAPBOX_ACCESS_TOKEN } from "../../components/utils/utils";

export default class LocationStore {
  constructor() {
    makeAutoObservable(this);
  }

  fetchAddress = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
      );
      const data = await response.json();
      const fullAddress = data.features[0]?.place_name;
      const address = fullAddress.split(",")[0].trim();
      return address;
    } catch (error) {
      console.error("Error fetching address:", error);
      return null;
    }
  };

  calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180); // deg2rad below
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      0.5 -
      Math.cos(dLat) / 2 +
      (Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        (1 - Math.cos(dLon))) /
        2;

    return R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
  };

  formatDistance = (distance: number) => {
    if (distance < 1) {
      return `${(distance * 1000).toFixed(0)}m`; // Convert to meters
    } else {
      return `${distance.toFixed(2)}km`; // Keep as kilometers
    }
  };
}
