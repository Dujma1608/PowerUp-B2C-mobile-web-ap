import { IonContent, IonPage } from "@ionic/react";
import "./Home.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import "./Home.css";
import MyMap from "../../components/Home/Map/MyMap";
import ConfirmInfo from "../../components/Charging/ConfirmInfoModal/ConfirmInfo";
import SearchBar from "../../components/Home/Search/SearchBar";
import SearchPage from "../../components/Home/Search/SearchPage";
import ChargingBill from "../../components/ChargingActive/Invoice/ChargingBill";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import BlurredScreen from "../../components/Home/BlurredScreen/BlurredScreen";
import Connecting from "../../components/Charging/Connecting";

const Home: React.FC = observer(() => {
  const {
    chargerStore,
    sessionStore,
    connectorStore,
    regularStore,
    profileStore,
  } = useStore();
  const { loadChargers, chargerRegistry } = chargerStore;
  const [locationAlert, setLocationAlert] = useState(false);
  const [scanned, setScanned] = useState(false);

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
      regularStore.setIsFirstTimeUser(false);
    }
  }, []);

  useEffect(() => {
    profileStore.getUserInfo();
    if (chargerRegistry.size <= 1) {
      loadChargers();
    }
  }, [loadChargers, chargerRegistry.size]);

  useEffect(() => {
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
    regularStore.setIsFirstTimeUser(false);

    localStorage.setItem("hasRegistered", "true");
  };

  return (
    <IonPage>
      {regularStore.isFirstTimeUser && (
        <BlurredScreen handleBlur={handleBlurClick} isHome={true} />
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
        </IonContent>
      )}
      <ChargingBill isOpen={regularStore.paymentFinished} />
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
      <ConfirmInfo />
    </IonPage>
  );
});

export default Home;
