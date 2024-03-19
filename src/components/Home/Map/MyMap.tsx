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
import { Charger } from "../../../app/models/charger";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

interface Props {
  setLocationAlert: (value: boolean) => void;
  chargers: Charger[];
}

const MyMap: React.FC<Props> = observer(({ setLocationAlert, chargers }) => {
  const { chargerStore, regularStore, connectorStore } = useStore();
  const { scannedConnector } = connectorStore;
  const { chargerRegistry } = chargerStore;
  const { mapCenter, mapZoom, setMapZoom } = regularStore;

  useEffect(() => {
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 10);
  }, [mapCenter, chargerRegistry, chargers]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        updateWhenZooming={true}
        url={MAP_URL}
        attribution={`&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors`}
        maxZoom={20}
      />
      <MarkerClusterComponent chargers={chargers} />

      <CenterMap chargers={chargers} />

      <GeoPosition setLocationAlert={setLocationAlert} />
    </MapContainer>
  );
});

export default MyMap;
