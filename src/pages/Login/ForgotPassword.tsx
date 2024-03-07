import { IonButton, IonIcon, IonLabel, IonModal, IonText } from "@ionic/react";
import "../../pages/Login/Login.css";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useHistory } from "react-router-dom";
import "./ForgotPassword.css";
import { arrowBackOutline } from "ionicons/icons";
import BackArrow from "../../app/common/BackArrow";
import MainIcon from "../../assets/images/Map/billIcon.png";
import { useStore } from "../../app/stores/store";
import { invoiceValidation } from "../../components/FormUtils/Validation";

interface Props {
  handleNext: () => void;
  setUserEmail: (email: string) => void;
}

const ForgotPassword: React.FC<Props> = ({ handleNext, setUserEmail }) => {
  const { userStore, regularStore } = useStore();
  const { sendActivationCode } = userStore;
  const [openMailModal, setOpenMailModal] = useState(false);
  const userEmail = "name@example.com";

  const isFormSubmittedRef = useRef(false);
  const history = useHistory();

  const handleCloseModal = () => {
    setOpenMailModal(false);
  };

  return (
    <>
      <Formik
        validationSchema={invoiceValidation}
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          sendActivationCode(values.email);
          history.push("/register/verify");
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form
            className="email-form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>
              <BackArrow setClose={() => history.goBack()} />
            </div>
            <div className="reset-container">
              <IonLabel className="title-login">Password reset</IonLabel>
              <MyTextInput
                placeholder="Email"
                name="email"
                type="email"
                handleChange={handleChange}
              />
              <div className="buttons-container-next">
                <IonButton type="submit" className="login-button">
                  <span>Next</span>
                </IonButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <IonModal
        id="password-reset-modal"
        isOpen={openMailModal}
        showBackdrop={true}
        backdropDismiss={false}
      >
        <div className="modal-bill-container">
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
    </>
  );
};

export default ForgotPassword;
