import React, { useRef, useState } from "react";
import { IonButton, IonModal, IonContent, IonIcon } from "@ionic/react";
import "./ConfirmInfo.css";
import { addSharp } from "ionicons/icons";
import { useHistory } from "react-router";

interface Props {}

const ConfirmInfo: React.FC<Props> = ({}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const history = useHistory();

  const handleModalDismiss = () => {
    setIsOpen(false);
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
      initialBreakpoint={0.62}
      className="custom-modal"
    >
      <div className="confirm-info-container" style={{ borderRadius: "30px" }}>
        <div className="header-container">
          <h3 className="w700">Confirm Information</h3>
          <div className="confirm-line-item-divider" />
          <p className="address w600">Radnicka cesta 37</p>
        </div>
        <div className="container">
          <div className="flex">
            <p className="category">Connector Type</p>
            <p className="w500">ChaDeMo</p>
          </div>
          <div className="flex">
            <p className="category">Current Type</p>
            <p className="w500">DC</p>
          </div>
          <div className="flex">
            <p className="category">Electricity Price</p>
            <p className="w500">EUR 0,50/kWh</p>
          </div>
          <div className="flex">
            <p className="category">Max Power</p>
            <p className="w500">100kW</p>
          </div>
        </div>
        <div className="line-item-divider" />
        <div className="buttons-info-container">
          <IonButton className="button-general payment-button">
            Add Payment Method
            <IonIcon icon={addSharp} style={{ marginLeft: "26px" }} />
          </IonButton>
          <IonButton
            onClick={() => history.push("/connecting")}
            className="stop-button"
          >
            Start Charging
          </IonButton>
        </div>
      </div>
    </IonModal>
  );
};

export default ConfirmInfo;
