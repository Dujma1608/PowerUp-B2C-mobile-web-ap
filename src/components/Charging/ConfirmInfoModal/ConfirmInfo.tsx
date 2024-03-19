import React, { useEffect, useRef, useState } from "react";
import { IonButton, IonModal, IonContent, IonIcon } from "@ionic/react";
import "./ConfirmInfo.css";
import { addSharp } from "ionicons/icons";
import { useHistory } from "react-router";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { SessionResponse } from "../../../app/models/session";

interface Props {}

const ConfirmInfo: React.FC<Props> = observer(({}) => {
  const [connectorAddress, setConnectorAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(true);
  const { regularStore, connectorStore, sessionStore, locationStore } =
    useStore();
  const { scannedConnector } = connectorStore;
  const modal = useRef<HTMLIonModalElement>(null);
  const history = useHistory();

  const handleModalDismiss = () => {
    connectorStore.setScannedConnector(null);
  };

  const handleStartCharging = () => {
    if (!isConnected) history.push("/not-connected");
    else {
      history.push("/connecting");
      connectorStore.setScannedConnector(null);
      sessionStore.createSession(1).then(() => {
        regularStore.setIsCharging(true);
        sessionStore.createHubConnection();
      });
    }
  };

  return (
    <IonModal
      ref={modal}
      isOpen={!!connectorStore.scannedConnector}
      handle={!regularStore.isWeb}
      backdropDismiss={!regularStore.isWeb}
      onDidDismiss={handleModalDismiss}
      initialBreakpoint={1}
      breakpoints={[1]}
      className="custom-modal"
    >
      <div className="confirm-info-container">
        <div className="header-container">
          <h3 className="font18 w600">Confirm Information</h3>
          <div className="confirm-line-item-divider" />
          <p className="address w500">{scannedConnector?.chargerAddress}</p>
        </div>
        <div className="container">
          <div className="flex">
            <p className="category">Connector Type</p>
            <p className="font14 w500">{scannedConnector?.connectorType}</p>
          </div>
          <div className="flex">
            <p className="category">Current Type</p>
            <p className="font14 w500">{scannedConnector?.currentType}</p>
          </div>
          <div className="flex">
            <p className="category">Electricity Price</p>
            <p className="font14 w500">EUR {scannedConnector?.price}/kWh</p>
          </div>
          <div className="flex">
            <p className="category">Max Power</p>
            <p className="font14 w500">{scannedConnector?.maxPowerKw} kW</p>
          </div>
        </div>
      </div>
      <div className="buttons-info-container">
        <IonButton className="button-general payment-button">
          Add Payment Method
          <IonIcon icon={addSharp} style={{ marginLeft: "26px" }} />
        </IonButton>
        <IonButton onClick={handleStartCharging} className="stop-button">
          Start Charging
        </IonButton>
      </div>
    </IonModal>
  );
});

export default ConfirmInfo;
