import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useState } from "react";
import GeoPosition from "./GeoPosition";

const Map: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<
    [number, number] | null
  >(null);

  const markers = [
    {
      geoCode: [45.78345, 15.915418],
      popUp: "Hello, I am pop up 1",
    },
    {
      geoCode: [45.778, 15.9151],
      popUp: "Hello, I am pop up 2",
    },
    {
      geoCode: [45.781, 15.9193],
      popUp: "Hello, I am pop up 3",
    },
  ];

  const handleLocationChange = (location: [number, number]) => {
    setCurrentLocation(location);
  };

  return (
    <MapContainer
      center={[45.8011104, 15.9678464]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVqbWExNjA4IiwiYSI6ImNscnVyNXhmejBqZ3UyamxtaDV0NGoxNGMifQ.qWAnv1eCfELsD52DjvXvUg"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker
          key={marker.popUp}
          position={marker.geoCode as [number, number]}
        ></Marker>
      ))}

      {/* Display current location marker */}
      <GeoPosition onLocationChange={handleLocationChange} />
    </MapContainer>
  );
};

export default Map;
