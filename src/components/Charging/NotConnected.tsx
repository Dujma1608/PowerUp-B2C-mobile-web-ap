import {
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonToolbar,
} from "@ionic/react";
import "./Connecting.css";
import Connect from "../../assets/images/Connect0.png";
import { useEffect } from "react";
import { useHistory } from "react-router";
import BackArrow from "../../app/common/BackArrow";

const NotConnected: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  return (
    <IonPage>
      <BackArrow setClose={handleBack} />
      <IonContent>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "0px 40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <h1
              className="w600 color021"
              style={{ textAlign: "center", font: "18px" }}
            >
              Please plug in cable into your car
            </h1>
            <img src={Connect} className="connect-img" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NotConnected;
