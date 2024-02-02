import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import "./MarkerNumber.css";
import { MAP_URL } from "../utils/utils";
import MarkerClusterComponent from "./MarkerClusterComponent";

const MyMap: React.FC = () => {
  const center: [number, number] = [45.778, 15.9151];
  const [currentLocation, setCurrentLocation] = useState<
    [number, number] | null
  >(null);

  const handleLocationChange = (location: [number, number]) => {
    setCurrentLocation(location);
  };

  useEffect(() => {
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 50);
  });

  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        url={MAP_URL}
        attribution={`&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors`}
      />
      <MarkerClusterComponent />
      {/* Display current location marker */}
      {/* <GeoPosition onLocationChange={handleLocationChange} /> */}
    </MapContainer>
  );
};

export default MyMap;
