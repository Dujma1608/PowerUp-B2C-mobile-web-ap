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
import { useStore } from "../../app/stores/store";
import { invoiceValidation } from "../../components/FormUtils/Validation";

interface Props {
  handleNext: () => void;
  setUserEmail: (email: string) => void;
  emailModalOpen: (value: boolean) => void;
}

const ForgotPassword: React.FC<Props> = ({
  handleNext,
  setUserEmail,
  emailModalOpen,
}) => {
  const { userStore, regularStore } = useStore();
  const { sendActivationCode } = userStore;
  const userEmail = "name@example.com";

  const isFormSubmittedRef = useRef(false);
  const history = useHistory();

  return (
    <>
      <Formik
        validationSchema={invoiceValidation}
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          sendActivationCode(values.email);
          setUserEmail(values.email);
          emailModalOpen(true);
          handleNext();
          // history.push("/register/verify");
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
    </>
  );
};

export default ForgotPassword;
