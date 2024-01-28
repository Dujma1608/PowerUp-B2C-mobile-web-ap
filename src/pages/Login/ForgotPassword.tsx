import { IonButton, IonIcon, IonLabel, IonText } from "@ionic/react";
import "../../pages/Login/Login.css";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useHistory } from "react-router-dom";
import "./ForgotPassword.css";
import { arrowBackOutline } from "ionicons/icons";

interface Props {
  handleNext: () => void;
  setUserEmail: (email: string) => void;
}

const ForgotPassword: React.FC<Props> = ({ handleNext, setUserEmail }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Incorrect email or password"),
  });

  const isFormSubmittedRef = useRef(false);
  const history = useHistory();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        if (validationSchema.isValidSync(values)) {
          setUserEmail(values.email);
          handleNext();
        }
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="email-form" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <div className="back-container">
              <IonButton
                className="backButton"
                slot="start"
                onClick={() => history.push("/login")}
              >
                <IonIcon icon={arrowBackOutline} />
              </IonButton>
            </div>
          </div>
          <div className="reset-container">
            <IonLabel className="title">Password reset</IonLabel>
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
  );
};

export default ForgotPassword;
