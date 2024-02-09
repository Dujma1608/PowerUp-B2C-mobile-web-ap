import React, { useRef, useState } from "react";
import { IonButton, IonModal, IonContent } from "@ionic/react";
import "./MarkerModal.css"; // Import your CSS file for styling
import ChargerTable from "./ChargerTable";

interface Props {
  onClose: () => void;
}

const MarkerModal: React.FC<Props> = ({ onClose }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(true);

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
      initialBreakpoint={0.75}
      breakpoints={[0, 0.25, 0.5, 0.75]}
    >
      <IonContent>
        <div className="modal-container">
          <div className="header-flex">
            <h3 className="energize-title">Energize</h3>
            <p className="address-this w500">Smiljanićeva 10a</p>
            <div className="flex-row">
              <p className="title w500">500m</p>
              <p className="title w700">
                5/<span className="title w500">10 Connectors</span>
              </p>
            </div>
          </div>
          <ChargerTable />
          <ChargerTable />
          <IonButton
            className="login-button"
            style={{ marginTop: "32px", width: "100%" }}
            onClick={onClose}
          >
            Go to Maps
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default MarkerModal;
