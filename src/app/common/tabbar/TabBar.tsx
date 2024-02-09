import {
  IonButton,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { person, location } from "ionicons/icons";
import { Redirect, Route, useHistory } from "react-router";
import MainIcon from "../../../assets/images/MainButtonIcon.png";

const TabBar: React.FC = () => {
  const history = useHistory();

  const handleMainButton = () => {
    history.push("/camera");
  };

  return (
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
          <Route path="/profile" exact />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="tab-bar">
          <IonTabButton className="tab-button" tab="location" href="/home">
            <IonIcon
              className="icon-location"
              aria-label="location"
              icon={location}
              size="medium"
            />
          </IonTabButton>

          <IonTabButton className="tab-button" tab="user" href="/profile">
            <IonIcon
              aria-label="user"
              className="icon-user"
              icon={person}
              size="medium"
            />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <IonButton
        className="circular-button"
        style={{ zIndex: 1000 }}
        onClick={handleMainButton}
      >
        <img src={MainIcon} />
      </IonButton>
    </div>
  );
};

export default TabBar;
