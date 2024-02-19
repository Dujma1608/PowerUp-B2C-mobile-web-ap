import { IonAlert, IonContent, IonPage } from "@ionic/react";
import "./Home.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import "./Home.css";
import MyMap from "../../components/Home/Map/MyMap";
import ConfirmInfo from "../../components/Charging/ConfirmInfoModal/ConfirmInfo";
import SearchBar from "../../components/Home/Search/SearchBar";
import TabBar from "../../app/common/tabbar/TabBar";
import { Geolocation } from "@capacitor/geolocation";
import SearchPage from "../../components/Home/Search/SearchPage";
import ChargingBill from "../../components/ChargingActive/ChargingBill";
import QRCodeScanner from "../../components/Home/QR Scanner/QRCodeScanner";
import { Device } from "@capacitor/device";

const Home: React.FC = () => {
  const [locationAlert, setLocationAlert] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [chargingBill, setChargingBill] = useState(false);

  const [mapCenter, setMapCenter] = useState<[number, number]>([
    45.778, 15.9151,
  ]);
  const [currentUserLocation, setCurrentUserLocation] = useState<
    [number, number] | undefined
  >(undefined);

  const history = useHistory();

  const closeBillModal = () => {
    setChargingBill(false);
  };
  const openSearchModal = () => {
    setShowSearchModal(true);
  };
  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  // const openDeviceSettings = () => {
  //   try {
  //     const info = await Device.getInfo();
  //     if (info.platform === 'android') {
  //       await Device.
  //     } else if (info.platform === 'ios') {
  //       // Handle redirection to iOS settings if needed
  //     } else {
  //       console.log('Unsupported platform');
  //     }
  //   } catch (error) {
  //     console.error('Error opening device settings:', error);
  //   }
  // };
  useEffect(() => {
    return () => setShowSearchModal(false);
  }, []);

  return (
    <IonPage>
      <SearchBar openModal={openSearchModal} closeModal={closeSearchModal} />
      {showSearchModal ? (
        <SearchPage open={showSearchModal} />
      ) : (
        <IonContent>
          <MyMap center={mapCenter} setLocationAlert={setLocationAlert} />
          <TabBar />
          {scanned && <ConfirmInfo />}
        </IonContent>
      )}
      <ChargingBill isOpen={chargingBill} closeModal={closeBillModal} />
      {/* <IonAlert
        isOpen={locationAlert}
        header="Location Services Required"
        message="Please enable location services to use this app."
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
    </IonPage>
  );
};

export default Home;
