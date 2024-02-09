import { IonSearchbar } from "@ionic/react";

interface Props {
  openModal: (value: boolean) => void;
  closeModal: (value: boolean) => void;
}

const SearchBar: React.FC<Props> = ({ openModal, closeModal }) => {
  return (
    <IonSearchbar
      onIonFocus={() => openModal(true)}
      showCancelButton="focus"
      onIonCancel={() => closeModal(false)}
      color={"dark"}
      placeholder="Search on Map"
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        padding: "54px 27px 0 26px",
        zIndex: 1000,
        "--border-radius": "10px",
      }}
    />
  );
};

export default SearchBar;
