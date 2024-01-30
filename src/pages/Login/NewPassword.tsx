import { IonButton, IonIcon, IonLabel, IonText } from "@ionic/react";
import "../../pages/Login/Login.css";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useHistory } from "react-router-dom";
import "./ForgotPassword.css";
import { arrowBackOutline } from "ionicons/icons";
import "./NewPassword.css";
import LoginTextInput from "../../components/LoginForm/LoginTextInput";

interface Props {
  userEmail: string;
  goBack: () => void;
}

const NewPassword: React.FC<Props> = ({ userEmail, goBack }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Incorrect email or password"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const isFormSubmittedRef = useRef(false);
  const history = useHistory();

  return (
    <Formik
      validationSchema={validationSchema}
      validateOnMount={true}
      initialValues={{
        email: userEmail,
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        if (validationSchema.isValidSync(values)) {
          console.log(values);
          history.push("/login");
        }
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="reset-form" autoComplete="off">
          <div>
            <div className="back-container">
              <IonButton className="backButton" slot="start" onClick={goBack}>
                <IonIcon icon={arrowBackOutline} />
              </IonButton>
            </div>
          </div>
          <div className="reset-container">
            <IonLabel className="title">Set new password for</IonLabel>
            <div className="reset-input-container">
              <MyTextInput
                type="email"
                name="email"
                placeholder="Email"
                showGreenTick={true}
                handleChange={handleChange}
              />
              <LoginTextInput
                placeholder="Password"
                name="password"
                type="password"
                handleChange={handleChange}
              />
              <LoginTextInput
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                handleChange={handleChange}
              />
            </div>
            <div className="reset-button">
              <IonButton type="submit">
                <span>Reset Password</span>
              </IonButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewPassword;
