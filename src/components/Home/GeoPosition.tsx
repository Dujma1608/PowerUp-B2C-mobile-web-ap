import { IonButton, IonLoading } from "@ionic/react";
import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { Marker } from "react-leaflet";

interface Props {
  onLocationChange: (location: [number, number]) => void;
}

const GeoPosition: React.FC<Props> = ({ onLocationChange }) => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const currentPosition = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = currentPosition.coords;
        // console.log("Visin", latitude);
        // console.log("sirina", longitude);

        setPosition([latitude, longitude]);
        onLocationChange([latitude, longitude]);
      } catch (error) {
        console.error("Error getting location:", error);
      }
    };

    getLocation();
  }, []);

  return position ? <Marker position={position}></Marker> : null;
};
export default GeoPosition;
