import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { contractOutline } from "ionicons/icons";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import ChargingCircle from "../../../components/ChargingActive/ChargingCircle";
import ChargingScreenPowerInfo from "../../../components/ChargingActive/ChargingScreenPowerInfo";
import ChargingScreenInfo from "../../../components/ChargingActive/ChargingScreenInfo";
import ChargingScreenFooter from "../../../components/ChargingActive/ChargingScreenFooter";
import ChargingBill from "../../../components/ChargingActive/Invoice/ChargingBill";

const WebChargingScreen: React.FC = observer(() => {
  const [percentage, setPercentage] = useState(83);
  const [isFinished, setIsFinished] = useState(false);
  const history = useHistory();
  const { regularStore, webSessionStore } = useStore();
  const { session, sessionUpdates, initialSessionInfo } = webSessionStore;

  const handleStop = () => {
    setIsFinished(true);
    history.push("/charging/process");
  };

  // useEffect(() => {
  //   if (Object.keys(sessionUpdates).length === 0 && initialSessionInfo) {
  //     setPercentage(initialSessionInfo.initialSoC);
  //   }
  // }, [sessionUpdates, initialSessionInfo]);

  return (
    <IonPage>
      <IonContent>
        <div className="charge-container">
          <div className="flex-column">
            <div className="header-charging">
              <p className="font20 w700">Charging</p>
              <p className="f14-green w700">
                {initialSessionInfo?.connectorType}
              </p>
              <p className="address w500">{initialSessionInfo?.address}</p>
            </div>
            <ChargingCircle
              percentage={
                sessionUpdates?.currentSoC! ?? initialSessionInfo?.currentSoC
              }
              setPercentage={setPercentage}
            />
            <ChargingScreenPowerInfo
              session={session}
              power={sessionUpdates?.currentPower}
            />
            <ChargingScreenInfo energy={sessionUpdates?.energyConsumed} />
          </div>
          <ChargingScreenFooter
            session={session}
            price={sessionUpdates?.currentPrice! ?? 0}
          />
        </div>
      </IonContent>
      <ChargingBill isOpen={regularStore.paymentFinished} />
    </IonPage>
  );
});

export default WebChargingScreen;
