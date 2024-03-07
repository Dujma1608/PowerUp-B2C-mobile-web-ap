import { IonSearchbar } from "@ionic/react";
import "./Search.css";

interface Props {
  openModal: () => void;
  closeModal: () => void;
}

const SearchBar: React.FC<Props> = ({ openModal, closeModal }) => {
  return (
    <IonSearchbar
      className="search-bar"
      onIonFocus={() => openModal()}
      showCancelButton="focus"
      onIonCancel={() => closeModal()}
      color="dark"
      searchIcon=""
      showClearButton="focus"
      placeholder="Search anything..."
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        padding: "54px 27px 0 26px",
        zIndex: 1000,
        "--border-radius": "10px",
        "--background": "red",
        color: "gray",
      }}
    />
  );
};

export default SearchBar;
