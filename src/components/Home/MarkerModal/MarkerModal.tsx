import React, { useEffect, useRef, useState } from "react";
import { IonButton, IonModal, IonContent } from "@ionic/react";
import "./MarkerModal.css"; // Import your CSS file for styling
import ChargerTable from "./ChargerTable";
import { useStore } from "../../../app/stores/store";
import { Charger } from "../../../app/models/charger";
import { observer } from "mobx-react-lite";
import MarkerModalHeader from "./Header/MarkerModalHeader";
import { ChargerData } from "../../../app/models/connector";

interface Props {
  onClose: () => void;
  charger: Charger;
}

const MarkerModal: React.FC<Props> = observer(({ onClose, charger }) => {
  const { chargerStore, regularStore, locationStore, connectorStore } =
    useStore();
  const { userLocation } = regularStore;
  const { chargerRegistry } = chargerStore;
  const { getChargerInfo, connectors } = connectorStore;
  const { fetchAddress, calculateDistance, formatDistance } = locationStore;
  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [distance, setDistance] = useState<number | string | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (userLocation && charger.latitude && charger.longitude) {
      const dist = calculateDistance(
        userLocation.lat,
        userLocation.lon,
        charger.latitude,
        charger.longitude
      );
      setDistance(formatDistance(dist));

      fetchAddress(charger.latitude, charger.longitude)
        .then((address) => setAddress(address))
        .catch((error) => {
          console.error("Error fetching address:", error);
          setAddress(null);
        });
    }
  }, [userLocation, charger.latitude, charger.longitude]);

  useEffect(() => {
    getChargerInfo(charger.id);
  }, [charger.id, getChargerInfo]);

  const handleModalDismiss = () => {
    setIsOpen(false);
    onClose();
  };

  const handleModalPresent = () => {
    setIsOpen(true);
  };

  return (
    <IonModal
      ref={modal}
      isOpen={isOpen}
      onDidDismiss={handleModalDismiss}
      onWillPresent={handleModalPresent}
      className="custom-modal"
      initialBreakpoint={1}
      breakpoints={[0, 1]}
    >
      <div className="marker-modal-container">
        <MarkerModalHeader
          address={charger.address}
          distance={distance}
          charger={charger}
        />
        <IonContent>
          <ChargerTable connectors={connectors} />
        </IonContent>
        <IonButton
          className="login-button"
          style={{ marginTop: "32px", width: "100%" }}
          onClick={onClose}
        >
          Go to Maps
        </IonButton>
      </div>
    </IonModal>
  );
});

export default MarkerModal;
