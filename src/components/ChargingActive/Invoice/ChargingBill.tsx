import {
  IonBackdrop,
  IonButton,
  IonIcon,
  IonImg,
  IonModal,
} from "@ionic/react";
import "./ChargingBill.css";
import {
  arrowForwardOutline,
  checkmarkSharp,
  closeOutline,
} from "ionicons/icons";
import mastercard from "../../../assets/images/Cards/mastercard.png";
import MainIcon from "../../../assets/images/Map/billIcon.png";
import { Capacitor } from "@capacitor/core";
import { useState } from "react";
import Alert from "../../../pages/Web/components/Alert";
import { Formik, useFormik } from "formik";
import EmailForm from "./EmailForm";
import ChargingBillFooter from "./ChargingBillFooter";
import ChargingBillFinalPrice from "./ChargingBillFinalPrice";
import { useStore } from "../../../app/stores/store";
import ChargingBillBasicInfo from "./ChargingBillBasicInfo";
import WebChargingBillFooter from "../../../pages/Web/components/WebChargingBillFooter";

interface Props {
  isOpen: boolean;
  closeModal?: (value: boolean) => void;
}

const ChargingBill: React.FC<Props> = ({ isOpen, closeModal }) => {
  const { sessionStore, regularStore } = useStore();
  const { finishedSession, session } = sessionStore;
  const [emailAlert, setEmailAlert] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);

  const closeThisModal = () => {
    regularStore.setPaymentFinished(false);
    sessionStore.toDefault();
    closeModal && closeModal(false);
  };

  return (
    <>
      <IonModal
        showBackdrop={true}
        backdropDismiss={false}
        id={
          Capacitor.getPlatform() === "web"
            ? "web-chargingBill-modal"
            : "chargingBill-modal"
        }
        isOpen={isOpen}
      >
        <div className="modal-bill-container">
          <div className="icon-transparent-container">
            <IonButton className="circular-button-bill">
              <img src={MainIcon} />
            </IonButton>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
            }}
          >
            <div className="modal-box">
              <div className="invoice-header-flex">
                <div className="successful-flex">
                  <IonIcon
                    src={checkmarkSharp}
                    style={{ fontSize: "22px", color: "#3ACE7A" }}
                  />
                  <p className="font20 w600">Successful!</p>
                </div>
                <p className="font10 w500 colorA6">
                  Your charging session is complete.
                </p>
              </div>
              <div className="border-div">
                <div className="transparent-circle"></div>
                <div className="grayline"></div>
                <div className="transparent-circle"></div>
              </div>
              <ChargingBillBasicInfo
                address={finishedSession?.address}
                energyConsumed={finishedSession?.energyConsumed}
                startTime={sessionStore.startTime}
                finishTime={sessionStore.finishTime}
                duration={sessionStore.formattedElapsedTime}
              />
              <div className="bill-info-container">
                <ChargingBillFinalPrice price={finishedSession?.totalPrice} />
              </div>
            </div>
            {Capacitor.getPlatform() === "web" ? (
              <WebChargingBillFooter />
            ) : (
              <ChargingBillFooter email={finishedSession?.email} />
            )}
          </div>
        </div>
      </IonModal>
      {Capacitor.getPlatform() === "web" ? null : (
        <IonModal
          isOpen={isOpen}
          className="button-modal"
          backdropDismiss={false}
        >
          <div className="exit-x" onClick={closeThisModal}>
            <IonIcon src={closeOutline} size="large" />
          </div>
        </IonModal>
      )}
      {emailAlert && <Alert error={isErrorAlert} />}
    </>
  );
};

export default ChargingBill;
