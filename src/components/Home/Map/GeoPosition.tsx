import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { CircleMarker, Marker, ZoomControl } from "react-leaflet";
import L from "leaflet";
import userLocationIcon from "../../../assets/images/Map/UserLocationIcon.png";
import { IonAlert } from "@ionic/react";
import { useStore } from "../../../app/stores/store";

interface Props {
  // position: [number, number] | null;
  // setPosition: (position: [number, number] | null) => void;
  setLocationAlert: (value: boolean) => void;
}
const GeoPosition: React.FC<Props> = ({ setLocationAlert }) => {
  const { regularStore } = useStore();
  const [position, setPosition] = useState<[number, number] | null>(null);

  const requestLocationPermission = async () => {
    const status = await Geolocation.checkPermissions();
    status.location;
    const permissionResult = await Geolocation.requestPermissions();

    if (permissionResult.location === "granted") {
      console.log("Location permission GRANTED");
      return true;
    } else {
      console.log("Location permission NOT GRANTED");
      return false;
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        const permissionGranted = await requestLocationPermission();
        if (!permissionGranted) {
          return;
        }

        const watchPositionId = Geolocation.watchPosition(
          {},
          (position: any, error: any) => {
            if (position && position.coords) {
              const { latitude, longitude } = position.coords;
              setLocationAlert(false);
              setPosition([latitude, longitude]);
              regularStore.setUserLocation(latitude, longitude);
            } else {
              console.error("Error getting position:", error);
            }
          }
        );

        return () => {
          Geolocation.clearWatch({ id: watchPositionId.toString() });
        };
      } catch (error) {
        // console.error("Error getting location:", error);
        setLocationAlert(true);
      }
    };

    getLocation();
  }, []);

  const userCurrentLocationIcon = new L.Icon({
    iconUrl: userLocationIcon,
    iconSize: [50, 55],
  });

  const openDeviceSettings = () => {
    // Redirect user to device settings
    // Implement redirection based on platform
    // For Android, you can use:
    window.location.href = "settings://location";
  };

  return position ? (
    <>
      <Marker position={position} icon={userCurrentLocationIcon}></Marker>
    </>
  ) : null;
};
export default GeoPosition;
