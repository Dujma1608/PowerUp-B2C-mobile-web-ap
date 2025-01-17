import { IonButton, IonIcon } from "@ionic/react";
import { addSharp } from "ionicons/icons";
import "./WebConfirmInfo.css";
import { QRConnector } from "../../../app/models/connector";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../../app/stores/store";

interface Props {
  connector: QRConnector | null;
}

const WebConfirmInfo: React.FC<Props> = observer(({ connector }) => {
  const [isConnected, setIsConnected] = useState(true);
  const history = useHistory();
  const { webSessionStore, regularStore } = useStore();

  const handleStartCharging = () => {
    if (!isConnected) history.push("/not-connected");
    else {
      history.push("/connecting");
      // webSessionStore.createSession(1).then(() => {
      //   regularStore.setIsCharging(true);
      //   webSessionStore.createWebHubConnection();
      //   console.log("Hello");
      // });
    }
  };

  return (
    <>
      <div className="web-confirm-info-container">
        <div className="header-container width-100">
          <h3 className="font18 w600 color021">Confirm Information</h3>
          <div className="web-confirm-line-item-divider" />
          <p className="font14 w500 color021">{connector?.chargerAddress}</p>
        </div>
        <div className="web-container">
          <div className="flex">
            <p className="category">Connector Type</p>
            <p className="font14 w500">{connector?.connectorType}</p>
          </div>
          <div className="flex">
            <p className="category">Current Type</p>
            <p className="font14 w500">{connector?.currentType}</p>
          </div>
          <div className="flex">
            <p className="category">Electricity Price</p>
            <p className="font14 w500">
              {connector?.currencyISO} {connector?.price}/kWh
            </p>
          </div>
          <div className="flex">
            <p className="category">Max Power</p>
            <p className="font14 w500">{connector?.maxPowerKw} kW</p>
          </div>
        </div>
      </div>
      <div className="buttons-info-container bottom">
        <IonButton className="button-general payment-button">
          Add Payment Method
          <IonIcon icon={addSharp} style={{ marginLeft: "26px" }} />
        </IonButton>
        <IonButton onClick={handleStartCharging} className="stop-button">
          Start Charging
        </IonButton>
      </div>
    </>
  );
});

export default WebConfirmInfo;
