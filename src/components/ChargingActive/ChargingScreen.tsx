import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import "./ChargingScreen.css";
import ChargingCircle from "./ChargingCircle";
import { useState } from "react";
import { useHistory } from "react-router";
import Icon from "../../assets/images/Charging/LightingIcon.png";
import { contractOutline } from "ionicons/icons";
import Timer from "./Timer";
import SureModal from "../../app/common/tabbar/SureModal";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import ChargingBill from "./Invoice/ChargingBill";

const ChargingScreen: React.FC = observer(() => {
  const [percentage, setPercentage] = useState(83);
  const [isFinished, setIsFinished] = useState(false);
  const history = useHistory();
  const startTime = new Date();
  const { regularStore, sessionStore } = useStore();
  const { session } = sessionStore;

  const handleStop = () => {
    setIsFinished(true);
    history.push("/charging/process");
  };
  const handleExit = () => {
    history.push("/app/home");
  };
  const formattedStartTime = startTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const modalTitle = "Stop Charging";
  const modalSubtitle = "Are you sure you want to stop charging?";
  const modalButtonText = "Yes";

  return (
    <IonPage className="charge-page">
      <IonContent>
        <div className="charge-container">
          {!regularStore.isWeb && (
            <IonButton className="exit" slot="start" onClick={handleExit}>
              <IonIcon size="medium" icon={contractOutline} />
            </IonButton>
          )}
          <div className="flex-column">
            <div className="header-charging">
              <h3 className="w700">Charging</h3>
              <p className="f14-green w700">
                {session?.connector.connectorType.name}
              </p>
              <p className="address w500">
                {session?.connector.charger.street}
              </p>
            </div>

            <ChargingCircle
              percentage={percentage}
              setPercentage={setPercentage}
            />

            <div className="info-active">
              <div className="icon-status">
                <img width={5} height={9} src={Icon} />
                <h3 className="f14-green w600">Connected</h3>
              </div>
              <p className="power w700">100 kWh</p>
              <p className="price">
                Electricity Price:{" "}
                <strong className="text w500">
                  {session?.currency.currencyISO} 0,50/kWh
                </strong>
              </p>
            </div>
            <div className="charger-info-container">
              <div className="flex-alling">
                <p className="font10 colorA6 w500">Energy Charged</p>
                <p className="font14 color3E w500">40kWh</p>
              </div>
              <div className="flex-alling">
                <p className="font10 colorA6 w500">Session Duration</p>
                <Timer />
              </div>
              <div className="flex-alling">
                <p className="font10 colorA6 w500">Session Start</p>
                <p className="font14 color3E w500">{formattedStartTime}</p>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <div>
              <p className="font10 colorA6 w500 currentBill">Current Bill</p>
              <h2 className="font24 color021 w700 priceBill">
                {session?.currency.currencyISO} 20,52
              </h2>
            </div>
            <button className="stop" id="open-sure-modal">
              Stop Charging
            </button>
          </div>
        </div>
        <SureModal
          title={modalTitle}
          subtitle={modalSubtitle}
          buttonText={modalButtonText}
          isCharging
        />
      </IonContent>
      <ChargingBill isOpen={regularStore.paymentFinished} />
    </IonPage>
  );
});

export default ChargingScreen;
