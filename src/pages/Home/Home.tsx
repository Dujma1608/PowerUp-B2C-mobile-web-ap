import {
  IonAlert,
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import "./Home.css";
import { Redirect, Route, useHistory } from "react-router";
import { useEffect, useState } from "react";
import "./Home.css";
import MyMap from "../../components/Home/Map/MyMap";
import ConfirmInfo from "../../components/Charging/ConfirmInfoModal/ConfirmInfo";
import SearchBar from "../../components/Home/Search/SearchBar";
import TabBar from "../../app/common/tabbar/TabBar";
import SearchPage from "../../components/Home/Search/SearchPage";
import ChargingBill from "../../components/ChargingActive/Invoice/ChargingBill";
import { person } from "ionicons/icons";
import Profile from "../Profile/Profile";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

const Home: React.FC = observer(() => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);

  const {
    chargerStore,
    sessionStore,
    connectorStore,
    regularStore,
    profileStore,
  } = useStore();
  const { loadChargers, chargerRegistry } = chargerStore;
  const [locationAlert, setLocationAlert] = useState(false);
  const [, setShowSearchModal] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [chargingBill, setChargingBill] = useState(false);
  const [chargers, setChargers] = useState<any[]>([]);

  const history = useHistory();

  const openSearchModal = () => {
    regularStore.setSearch(true);
  };
  const closeSearchModal = () => {
    regularStore.setSearch(false);
  };
  useEffect(() => {
    // Check if the user has registered before
    const hasRegistered = localStorage.getItem("hasRegistered");
    if (hasRegistered) {
      setIsFirstTimeUser(false);
    }
  }, []);

  useEffect(() => {
    profileStore.getUserInfo();
    if (chargerRegistry.size <= 1) {
      loadChargers();
    }
  }, [loadChargers, chargerRegistry.size]);

  useEffect(() => {
    // chargerStore.createHubConnection();
    // sessionStore.createHubConnection()

    const unlisten = history.listen((location, action) => {
      if (action === "POP") {
        history.push("/app/home");
      }
    });

    return () => {
      unlisten();
    };
  }, [history, regularStore.search]);

  const handleBlurClick = () => {
    setIsFirstTimeUser(false);
    // Set a flag in local storage indicating that the user has registered
    localStorage.setItem("hasRegistered", "true");
  };

  return (
    <IonPage>
      {isFirstTimeUser && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(4px)",
            zIndex: 9999,
          }}
          onClick={handleBlurClick}
        >
          <p className="font14 w500">Tap anywhere to continue...</p>
        </div>
      )}
      <SearchBar openModal={openSearchModal} closeModal={closeSearchModal} />
      {regularStore.search ? (
        <SearchPage />
      ) : (
        <IonContent>
          <MyMap
            setLocationAlert={setLocationAlert}
            chargers={Array.from(chargerRegistry.values())}
          />

          {scanned && <ConfirmInfo />}
        </IonContent>
      )}

      <ChargingBill isOpen={chargingBill} closeModal={setChargingBill} />
      {/* <IonAlert
        isOpen={locationAlert}
        header="Location Services Required"
        message="Please enable location services for easier usage of map."
        buttons={[
          // {
          //   text: "Cancel",
          //   role: "cancel",
          //   handler: () => console.log("Cancel clicked"),
          // },
          {
            text: "Ok",
            role: "Cancel",
          },
        ]}
      /> */}
      {connectorStore.scannedConnector ? <ConfirmInfo /> : null}
    </IonPage>
  );
});

export default Home;
