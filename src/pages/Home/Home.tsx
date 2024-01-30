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
import Map from "../../components/Home/MyMap";
import { useState } from "react";
import "./Home.css";
import mainIcon from "../../assets/images/MainButtonIcon.png";
import MyMap from "../../components/Home/MyMap";
import MarkerModal from "../../components/Home/MarkerModal/MarkerModal";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("location");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleMarkerClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
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
        <MyMap onMarkerClick={handleMarkerClick} />
        {popupVisible && <MarkerModal onClose={handleClosePopup} />}
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
          <IonButton className="circular-button" style={{ zIndex: 1000 }}>
            <img src={mainIcon} />
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
