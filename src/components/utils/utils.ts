import L from "leaflet";
import IconMarker from "../../assets/images/Map/MapIconMarker.png";

export const CustomMarkerIcon = (number: number) => {
  return new L.DivIcon({
    className: "custom-marker-icon",
    iconSize: [45, 50],
    iconAnchor: [15, 45],
    html: `<div >
             <img src="${IconMarker}" alt="Marker" style="width: 100%; height: 100%;"/>
            <div class="number-overlay">${number}</div>
          </div>`,
  });
};

export const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZHVqbWExNjA4IiwiYSI6ImNscnlxZTRvMzFtaHYyaW11ZDQ1cTRhczYifQ.NNWHqyeKHUH06Pw4-EegTQ";

const MAPBOX_STYLE_URL = "mapbox://styles/dujma1608/clrz01dqd00vk01qy2hmp8dhw";

export const fetchAddress = async (lat: number, lon: number) => {
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

export const MAP_URL = `https://api.mapbox.com/styles/v1/dujma1608/clrz01dqd00vk01qy2hmp8dhw/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;

export const cards = [
  {
    id: 1,
    cardNumber: "5479732598989898",
    expiryDate: "07/24",
    cvv: "123",
    cardType: "mastercard",
  },
  {
    id: 2,
    cardNumber: "3703732598989898",
    expiryDate: "07/25",
    cvv: "127",
    cardType: "visa",
  },
];
