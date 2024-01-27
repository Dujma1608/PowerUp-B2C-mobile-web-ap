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
import Map from "../../components/Home/Map";
import { useState } from "react";
import "./Home.css";
import mainIcon from "../../assets/images/MainButtonIcon.png";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("location");
  return (
    <IonPage className="home-page">
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
      <IonContent className="home-screen">
        <Map />
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

{
  /* <IonTabs>
  <IonTabBar slot="bottom">

    <IonTabButton
      tab="location"
      href="/location"
      onClick={() => setActiveTab("location")}
      selected={activeTab === "location"}
    >

      <IonIcon name="location"></IonIcon>
    </IonTabButton>


    <IonTabButton
      tab="user"
      href="/user"
      onClick={() => setActiveTab("user")}
      selected={activeTab === "user"}
    >

      <IonIcon name="person"></IonIcon>
    </IonTabButton>
  </IonTabBar>
</IonTabs> */
}
