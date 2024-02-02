import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { location, person } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Map from "../../components/Home/Map/MyMap";
import { useState } from "react";
import "./Home.css";
import mainIcon from "../../assets/images/MainButtonIcon.png";
import MyMap from "../../components/Home/Map/MyMap";
import MarkerModal from "../../components/Home/MarkerModal/MarkerModal";
import BarcodeScanner from "../../components/Home/QR Scanner/BarcodeScanner";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("location");
  const [showScannerModal, setShowScannerModal] = useState(false);

  const openScannerModal = () => {
    setShowScannerModal(true);
  };

  const closeScannerModal = () => {
    setShowScannerModal(false);
  };

  return (
    <IonPage>
      <IonSearchbar
        placeholder="Search anything"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          padding: "54px 27px 0 26px",
          zIndex: 1000,
          "--border-radius": "10px",
        }}
      />
      <IonContent fullscreen>
        <MyMap />
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            height: "9%",
            zIndex: 1000,
          }}
        >
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" exact />
              <Route path="/user" />
              <Redirect exact from="/" to="/home" />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" style={{ height: "100%" }}>
              <IonTabButton tab="location" href="/home">
                <IonIcon icon={location} size="medium" />
              </IonTabButton>

              <IonTabButton tab="user" href="/user-profile">
                <IonIcon icon={person} size="medium" />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
          <IonButton
            className="circular-button"
            style={{ zIndex: 1000 }}
            onClick={openScannerModal}
          >
            <img src={mainIcon} />
          </IonButton>
        </div>
      </IonContent>
      {showScannerModal && <BarcodeScanner onClose={closeScannerModal} />}
    </IonPage>
  );
};

export default Home;
