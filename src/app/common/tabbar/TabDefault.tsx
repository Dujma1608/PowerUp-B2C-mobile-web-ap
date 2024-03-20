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

import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { observer } from "mobx-react-lite";
import Home from "../../../pages/Home/Home";
import Profile from "../../../pages/Profile/Profile";
import { useStore } from "../../stores/store";
import ChargingMapCircle from "../../../components/ChargingActive/ChargingMapCircle";
import MainIcon from "../../../assets/images/MainButtonIcon.png";
import BlurredScreen from "../../../components/Home/BlurredScreen/BlurredScreen";

const TabDefault: React.FC = observer(() => {
  const history = useHistory();
  const { regularStore, sessionStore } = useStore();

  const handleMainButton = () => {
    BarcodeScanner.prepare();
    history.push("/camera");
  };
  const handleBlurClick = () => {
    regularStore.setIsFirstTimeUser(false);

    localStorage.setItem("hasRegistered", "true");
  };

  return (
    <>
      {regularStore.isFirstTimeUser && (
        <BlurredScreen handleBlur={handleBlurClick} isHome={false} />
      )}
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/home" render={() => <Home />} exact={true} />
          <Route path="/app/profile" render={() => <Profile />} exact={true} />
          <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
        </IonRouterOutlet>

        <IonTabBar
          slot="bottom"
          className={regularStore.search ? "hide-tab-bar" : "tab-bar"}
        >
          <IonTabButton tab="location" href="/app/home" className="tab-button">
            <IonIcon
              className="icon-location"
              aria-label="location"
              icon={location}
              size="medium"
            />
          </IonTabButton>

          <IonTabButton tab="user" href="/app/profile" className="tab-button">
            <IonIcon
              aria-label="user"
              className="icon-user"
              icon={person}
              size="medium"
            />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      {!regularStore.search &&
        (regularStore.isCharging ? (
          <div
            className="charging-circular-button"
            onClick={() => history.push("/charging")}
          >
            <ChargingMapCircle
              percentage={sessionStore.sessionUpdates?.currentSoC!}
            />
          </div>
        ) : (
          <IonButton className="circular-button" onClick={handleMainButton}>
            <img src={MainIcon} />
          </IonButton>
        ))}
    </>
  );
});

export default TabDefault;
