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

interface Props {
  isOpen: boolean;
  closeModal?: (value: boolean) => void;
}

const ChargingBill: React.FC<Props> = ({ isOpen, closeModal }) => {
  const [emailAlert, setEmailAlert] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const date = "21.Oct 2023, 10:30AM";
  const price = 25.2;
  const cardNo = "2234756492308463";
  const email = "mate.matic@gmail.com";
  const maskedCardNo =
    "•".repeat(4) + " " + cardNo.substring(cardNo.length - 4, cardNo.length);

  const closeThisModal = () => {
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
              height: "100%",
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
              <div className="bill-info-container">
                <div className="bill-address-flex flex-justify-space">
                  <div style={{ width: "125px" }}>
                    <p className="font10 w600 colorA6">Location Address</p>
                    <p className="font12 w600 color021">Radnicka Cesta 37</p>
                  </div>
                  <div>
                    <p
                      className="font12 w600"
                      style={{ color: "#3E3E3E", textAlign: "end" }}
                    >
                      40,31 KwH
                    </p>
                  </div>
                </div>
                <div className="bill-address-flex">
                  <div>
                    <p className="font10 w600 colorA6">Start Time</p>
                    <p className="font12 w600 color021">{date}</p>
                  </div>
                </div>
                <div className="bill-address-flex">
                  <div>
                    <p className="font10 w600 colorA6">Stop Time</p>
                    <p className="font12 w600 color021">{date}</p>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <p className="font10 w600 colorA6">Duration</p>
                      <p className="font12 w600" style={{ color: "#3E3E3E" }}>
                        40,31 KwH
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bill-info-container">
                <div className="bill-address-flex">
                  <div style={{ width: "125px" }}>
                    <p className="font10 w600 colorA6">Total Bill</p>
                    <p
                      className="font12 w600 color021"
                      style={{ fontSize: "22px" }}
                    >
                      {price} EUR
                    </p>
                  </div>
                  <div className="completed-green-div">
                    <IonIcon
                      src={checkmarkSharp}
                      style={{ fontSize: "10px", color: "#3ACE7A" }}
                    />
                    <p className="font10 w500" style={{ color: "#3ACE7A" }}>
                      Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {Capacitor.getPlatform() === "web" ? (
              <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
                {({ handleChange, isValid, dirty, isSubmitting, values }) => (
                  <div className="web-footer-bill-container">
                    <div className="web-card-bill-flex">
                      <IonImg
                        style={{
                          width: "42px",
                          height: "24px",
                          marginRight: "10px",
                        }}
                        src={mastercard}
                      />
                      <p className="font12 w500">{maskedCardNo}</p>
                    </div>
                    <EmailForm />
                  </div>
                )}
              </Formik>
            ) : (
              <div className="footer-bill-container">
                <div className="card-bill-flex">
                  <IonImg
                    style={{
                      width: "42px",
                      height: "24px",
                      marginRight: "10px",
                    }}
                    src={mastercard}
                  />
                  <p className="font12 w500">{maskedCardNo}</p>
                </div>
                <p className="font10 w500 colorA6">
                  Invoice sent to your email: {email}
                </p>
              </div>
            )}
          </div>
        </div>
      </IonModal>
      {Capacitor.getPlatform() === "web" ? null : (
        <IonModal isOpen={isOpen} className="button-modal">
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
