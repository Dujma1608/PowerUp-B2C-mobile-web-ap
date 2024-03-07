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
import ChargingMapCircle from "../../../components/ChargingActive/ChargingMapCircle";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";

const TabBar: React.FC = observer(() => {
  const history = useHistory();
  const { regularStore } = useStore();

  const handleMainButton = () => {
    BarcodeScanner.prepare();
    history.push("/camera");
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "9%",
        zIndex: 100,
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
      {regularStore.isCharging ? (
        <div
          className="circular-button"
          onClick={() => history.push("/charging")}
        >
          <ChargingMapCircle />
        </div>
      ) : (
        <IonButton className="circular-button" onClick={handleMainButton}>
          <img src={MainIcon} />
        </IonButton>
      )}
    </div>
  );
});

export default TabBar;
