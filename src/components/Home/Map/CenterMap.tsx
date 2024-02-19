import { useMap } from "react-leaflet";
import locate from "../../../assets/images/Map/locate.png";
import "./Map.css";
import { Geolocation } from "@capacitor/geolocation";

interface Props {
  mapCenter: [number, number];
  setMapCenter: (coordinates: [number, number]) => void;
}
const CenterMap: React.FC<Props> = ({ mapCenter, setMapCenter }) => {
  const map = useMap();

  const centerOnUserLocation = async () => {
    try {
      const currentPosition = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = currentPosition.coords;
      console.log("Clicked", [latitude, longitude]);
      console.log("Map center", mapCenter);
      setMapCenter([latitude, longitude]);

      map.setView([latitude, longitude]);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  const handleClick = () => {
    centerOnUserLocation();
  };
  return (
    <div className="locate-container" onClick={handleClick}>
      <img
        src={locate}
        alt="locate"
        style={{ width: "24px", height: "24px" }}
      />
    </div>
  );
};

export default CenterMap;
