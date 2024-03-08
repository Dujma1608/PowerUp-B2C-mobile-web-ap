import { IonButton, IonIcon, IonPage } from "@ionic/react";
import "./Initial.css";
import vectors1 from "../../../assets/images/Web/vectors1.svg";
import vectors2 from "../../../assets/images/Web/vectors2.svg";
import { arrowForwardOutline } from "ionicons/icons";
import Alert from "../../../pages/Web/components/Alert";
import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import ConfirmInfo from "../../../components/Charging/ConfirmInfoModal/ConfirmInfo";
import { useStore } from "../../../app/stores/store";

const Initial: React.FC = () => {
  const [qr, setQr] = useState<string | null>("");
  const [emailAlert, setEmailAlert] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [cpoApp, setCpoApp] = useState(true);

  const { connectorStore } = useStore();
  const location = useLocation();
  const { qr: qrString } = useParams<{ qr: string }>();
  const history = useHistory();

  if (emailAlert)
    setTimeout(() => {
      setEmailAlert(false);
    }, 7000);

  const handleTermsLink = () => {
    history.push("/terms");
  };
  const handleProceed = () => {
    history.push("/home");
  };

  const handleDownloadApp = () => {
    const userAgent = navigator.userAgent;

    // Detect if user is using iOS
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = "https://apps.apple.com";
    } else if (/android/i.test(userAgent)) {
      // Detect if user is using Android
      window.location.href = "https://play.google.com/store";
    } else {
      // Fallback for other devices
      console.log("Unsupported device");
    }
  };

  useEffect(() => {
    setQr(qrString);
    // Assuming getConnector is a function to fetch connector data
    if (qrString) {
      connectorStore.getConnector(qrString);
    }
  }, [location.search, connectorStore]);

  return (
    <IonPage className="background-container">
      <img className="vector-group-one" src={vectors1} alt="vectors1" />{" "}
      <img className="vector-group-two" src={vectors2} alt="vectors2" />{" "}
      <div className="web-home-container">
        <div className="web-title-container">
          <p className="title colorW">CHARGE YOUR</p>
          <p className="title colorG">EV EASILY</p>
        </div>
        <div className="web-button-container">
          {cpoApp && (
            <IonButton className="download" onClick={handleDownloadApp}>
              Download App
            </IonButton>
          )}
          <div className="proceed-container">
            <IonButton className="proceed" onClick={handleProceed}>
              Proceed within browser
            </IonButton>
            <div className="arrow-container" onClick={handleProceed}>
              <IonIcon className="arrow" icon={arrowForwardOutline} />
            </div>
          </div>
        </div>
        <p className="terms" onClick={handleTermsLink}>
          Terms and Conditions
        </p>
      </div>
    </IonPage>
  );
};
export default Initial;
