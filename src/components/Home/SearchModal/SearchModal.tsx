import React, { useEffect, useRef, useState } from "react";
import {
  IonSearchbar,
  IonModal,
  IonButton,
  IonContent,
  IonPage,
} from "@ionic/react"; // Import your map component

interface Props {
  open: boolean;
}

const SearchModal: React.FC<Props> = ({ open }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "80%",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h3>Not working</h3>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SearchModal;
