import { useEffect, useState } from "react";
import GeoPosition from "./GeoPosition";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { MAP_URL, markers } from "../../utils/const/MapUtils";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { Icon } from "leaflet";
import "./Map/CustomIcon.css";
import IconMarker from "../../assets/images/Map/MarkerIconMap.png";

interface Props {
  onMarkerClick: () => void;
}

const MyMap: React.FC<Props> = ({ onMarkerClick }) => {
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
    }, 20);
  });

  const icon = new Icon({
    iconUrl: IconMarker,
    iconSize: [45, 45],
  });
  const customIcon = (number: number) => {
    return L.divIcon({
      className: "custom-marker-icon", // You can define additional styles in your CSS for this class
      html: `<div class="outer-circle">
             <div class="inner-circle">
               <div class="number">${number}</div>
             </div>
           </div>`,

      iconAnchor: [25, 10], // Adjust anchor to position the tip of the icon
    });
  };

  const handleMarkerClick = () => {
    onMarkerClick(); // You can add more logic or pass information about the clicked marker
  };

  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}

      <TileLayer
        url={MAP_URL}
        attribution={`&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors`}
      />
      {markers.map((marker) => (
        <Marker
          key={marker.popUp}
          position={marker.geoCode as [number, number]}
          icon={icon}
          eventHandlers={{ click: () => handleMarkerClick() }}
        ></Marker>
      ))}
      {/* Display current location marker */}
      <GeoPosition onLocationChange={handleLocationChange} />
    </MapContainer>
  );
};

export default MyMap;
