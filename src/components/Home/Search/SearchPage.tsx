import React, { useEffect, useRef, useState } from "react";
import {
  IonSearchbar,
  IonModal,
  IonButton,
  IonContent,
  IonPage,
  IonImg,
} from "@ionic/react";
import searchImg from "../../../assets/images/Map/Search.png";

interface Props {
  open: boolean;
}

const SearchPage: React.FC<Props> = ({ open }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <IonImg className="search-img" src={searchImg} alt="search.png" />
        <p
          className="font16 w500 colorA6"
          style={{ width: "80%", textAlign: "center" }}
        >
          Currently Undergoing Development
        </p>
      </div>
    </div>
  );
};

export default SearchPage;
