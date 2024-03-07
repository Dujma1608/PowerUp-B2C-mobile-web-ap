import { useMap } from "react-leaflet";
import locate from "../../../assets/images/Map/locate.png";
import "./Map.css";
import { Geolocation } from "@capacitor/geolocation";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";
import { Charger } from "../../../app/models/charger";

interface Props {
  chargers: Charger[];
}

const CenterMap: React.FC<Props> = observer(({ chargers }) => {
  const map = useMap();
  const { regularStore, connectorStore, locationStore } = useStore();
  const { scannedConnector } = connectorStore;

  useEffect(() => {
    const scanProcess = () => {
      if (scannedConnector) {
        chargers.forEach((charger) => {
          if (scannedConnector.chargerAddress === charger.address) {
            map.setView([charger.latitude - 0.0007, charger.longitude]);
            map.setZoom(18);
          }
        });
      }
    };
    scanProcess();
  }, [scannedConnector, chargers, map]);

  const centerOnUserLocation = async () => {
    try {
      const currentPosition = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = currentPosition.coords;

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
});

export default CenterMap;
