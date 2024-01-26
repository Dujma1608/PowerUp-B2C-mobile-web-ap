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

const NewPassword: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Incorrect email or password"),
    password: Yup.string().required("Password is required"),
  });

  const isFormSubmittedRef = useRef(false);
  const history = useHistory();

  return (
    <Formik
      validationSchema={validationSchema}
      validateOnMount={false}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting, submitForm }) => {
        if (!isFormSubmittedRef.current) {
          // Manually trigger validation
          isFormSubmittedRef.current = true;
          setSubmitting(false);
        }
        // Handle further submission logic if needed
        console.log(values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="reset-form" autoComplete="off">
          <div>
            <div className="back-container">
              <IonButton
                className="backButton"
                slot="start"
                onClick={() => history.push("/login/forgot-password")}
              >
                <IonIcon icon={arrowBackOutline} />
              </IonButton>
            </div>
          </div>
          <div className="reset-container">
            <IonLabel className="title">Set new password for</IonLabel>
            <div className="reset-input-container">
              <MyTextInput placeholder="Email" name="email" type="email" />
              <MyTextInput
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                showPasswordToggle={false}
              />
              <MyTextInput
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                name="password"
                showPasswordToggle={false}
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
