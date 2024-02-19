import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import "./MarkerNumber.css";
import { MAP_URL } from "../../utils/utils";
import MarkerClusterComponent from "./MarkerClusterComponent";
import GeoPosition from "./GeoPosition";
import { Geolocation } from "@capacitor/geolocation";
import CenterMap from "./CenterMap";

interface Props {
  center: [number, number];
  setLocationAlert: (value: boolean) => void;
}

const MyMap: React.FC<Props> = ({ center, setLocationAlert }) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    45.778, 15.9151,
  ]);

  useEffect(() => {
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 10);
  }, [mapCenter]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        url={MAP_URL}
        attribution={`&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors`}
      />
      <MarkerClusterComponent />

      <CenterMap mapCenter={mapCenter} setMapCenter={setMapCenter} />

      {/* Display current location marker */}
      <GeoPosition setLocationAlert={setLocationAlert} />
    </MapContainer>
  );
};

export default MyMap;
