import { IonContent, IonPage } from "@ionic/react";
import "./Home.css";
import { useHistory } from "react-router";
import { useState } from "react";
import "./Home.css";
import MyMap from "../../components/Home/Map/MyMap";
import SearchModal from "../../components/Home/SearchModal/SearchModal";
import ConfirmInfo from "../../components/Charging/ConfirmInfoModal/ConfirmInfo";
import SearchBar from "../../components/Home/Search/SearchBar";
import TabBar from "../../app/common/tabbar/TabBar";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("location");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [scanned, setScanned] = useState(false);

  const history = useHistory();

  const openSearchModal = () => {
    setShowSearchModal(true);
  };
  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  return (
    <IonPage>
      <SearchBar openModal={openSearchModal} closeModal={closeSearchModal} />
      {showSearchModal ? (
        <SearchModal open={showSearchModal} />
      ) : (
        <IonContent>
          <MyMap />
          <TabBar />
          {scanned && <ConfirmInfo />}
        </IonContent>
      )}
    </IonPage>
  );
};

export default Home;
