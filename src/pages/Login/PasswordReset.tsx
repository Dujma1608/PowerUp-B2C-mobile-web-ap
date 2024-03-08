import { IonButton, IonContent, IonModal, IonPage } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";
import MainIcon from "../../assets/images/Map/billIcon.png";
import "./PasswordReset.css";

const PasswordReset: React.FC = () => {
  const [isForgotPaswordStep, setIsForgotPaswordStep] = useState(true);
  const [openMailModal, setOpenMailModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleNext = () => {
    setIsForgotPaswordStep(false);
  };

  const handleBack = () => {
    setIsForgotPaswordStep(true);
  };
  const handleCloseModal = () => {
    setOpenMailModal(false);
  };

  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        {isForgotPaswordStep ? (
          <ForgotPassword
            handleNext={handleNext}
            setUserEmail={setUserEmail}
            emailModalOpen={setOpenMailModal}
          />
        ) : (
          <NewPassword userEmail={userEmail} goBack={handleBack} />
        )}
      </IonContent>
      <IonModal
        id="password-reset-modal"
        isOpen={openMailModal}
        showBackdrop={true}
        backdropDismiss={false}
      >
        <div className="modal-reset-password-container">
          <div className="icon-transparent-container-reset">
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
            <div
              className="modal-box"
              style={{ textAlign: "center", padding: "35px 15px 20px 15px" }}
            >
              <p className="font18 w600 color021">Check your E-mail</p>
              <p className="font12 w400 colorA6">
                We sent you an email to {userEmail} with instruction how to
                reset your password
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <button id="close-modal-button" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </IonModal>
    </IonPage>
  );
};

export default PasswordReset;
