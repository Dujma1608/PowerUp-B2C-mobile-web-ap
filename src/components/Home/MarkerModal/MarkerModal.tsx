import React, { useRef, useState } from "react";
import { IonButton, IonModal, IonContent } from "@ionic/react";
import "./MarkerModal.css"; // Import your CSS file for styling
import ChargerTable from "./ChargerTable";

interface Props {
  onClose: () => void;
  geoCode: [number, number];
  connectorsNumber: number;
}

const MarkerModal: React.FC<Props> = ({ onClose }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleModalDismiss = () => {
    setIsOpen(false);
    onClose();
  };

  const handleModalPresent = () => {
    setIsOpen(true);
  };

  return (
    <IonModal
      ref={modal}
      isOpen={isOpen}
      onDidDismiss={handleModalDismiss}
      onWillPresent={handleModalPresent}
      className="custom-modal"
      initialBreakpoint={0.75}
      breakpoints={[0, 0.25, 0.5, 0.75]}
    >
      <IonContent>
        <div className="modal-container">
          <div className="header-flex">
            <h3 className="energize-title">Energize</h3>
            <p className="address w500">Smiljanićeva 10a</p>
            <div className="flex-row">
              <p className="title w500">500m</p>
              <p className="title w700">
                5/<span className="title w500">10 Connectors</span>
              </p>
            </div>
          </div>
          <ChargerTable />
          <ChargerTable />
          <IonButton
            className="login-button"
            style={{ marginTop: "32px", width: "100%" }}
            onClick={onClose}
          >
            Go to Maps
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default MarkerModal;

//  <IonTitle>Energize</IonTitle>
//           <IonGrid>
//             {/* First Row */}
//             <IonItem>
//               <IonRow className="grid-row">
//                 <IonCol size="12" className="grid-col">
//                   <IonText className="grid-address">Smiljaniceva 10a</IonText>
//                 </IonCol>
//               </IonRow>

//               <IonRow className="grid-row">
//                 <IonCol size="6" className="grid-col">
//                   <IonText className="grid-distance">500m</IonText>
//                 </IonCol>
//                 <IonCol size="6" className="grid-col">
//                   <IonText className="grid-connectors">2/10 connectors</IonText>
//                 </IonCol>
//               </IonRow>
//             </IonItem>

//             {/* Line Item Divider */}
//             {/* <IonRow className="line-item-divider"></IonRow> */}
//             {/* Charger #1 */}
//             <IonItem>
//               <IonRow className="grid-row">
//                 <IonCol size="12" className="grid-col">
//                   <IonText className="charger-title">Charger #1</IonText>
//                 </IonCol>
//               </IonRow>

//               <IonRow className="grid-row">
//                 <IonCol size="6" className="grid-col">
//                   <IonText className="grid-connector">
//                     Connector #1:CCS2
//                   </IonText>
//                 </IonCol>
//                 <IonCol size="4" className="grid-col">
//                   <IonText className="grid-distance w600">DC</IonText>
//                 </IonCol>
//               </IonRow>

//               <IonRow className="grid-row">
//                 <IonCol size="6" className="grid-col">
//                   <IonText className="grid-connector">Connector #2</IonText>
//                 </IonCol>
//                 <IonCol size="4" className="grid-col">
//                   <IonText className="grid-distance w600">AC</IonText>
//                 </IonCol>
//               </IonRow>
//             </IonItem>

//             {/* Line Item Divider */}
//             <IonRow className="line-item-divider"></IonRow>

//             {/* Charger #2 */}
//             <IonItem>
//               <IonRow className="grid-row">
//                 <IonCol size="12" className="grid-col">
//                   <IonText className="charger-title">Charger #2</IonText>
//                 </IonCol>
//               </IonRow>

//               <IonRow className="grid-row">
//                 <IonCol size="6" className="grid-col">
//                   <IonText className="grid-connector">Connector #1</IonText>
//                 </IonCol>
//                 <IonCol size="4" className="grid-col ion-align-items-center">
//                   <IonText className="grid-distance w600">DC</IonText>
//                   <span>Available</span>
//                 </IonCol>
//               </IonRow>

//               <IonRow className="grid-row">
//                 <IonCol size="6" className="grid-col">
//                   <IonText className="grid-connector">Connector #2</IonText>
//                 </IonCol>
//                 <IonCol size="4" className="grid-col">
//                   <IonText className="grid-distance w600">AC</IonText>
//                 </IonCol>
//               </IonRow>
//             </IonItem>
//           </IonGrid>
