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
import BackArrow from "../../app/common/BackArrow";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";

interface Props {
  userEmail: string;
  goBack: () => void;
}

const NewPassword: React.FC<Props> = observer(({ userEmail, goBack }) => {
  const { userStore } = useStore();
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Incorrect email or password"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
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
        companyId: 1,
        activationCode: "",
        newPassword: "",
        newPasswordRepeated: "",
      }}
      onSubmit={(values, { setErrors }) => {
        console.log(values);
        userStore.resetPassword(values).catch((error) => {
          if (error.response && error.response.data) {
            setErrors(error.response.data.errors);
          }
        });
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="reset-form" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <BackArrow setClose={() => history.goBack()} />
          </div>
          <div className="reset-container">
            <IonLabel className="title-login">Set new password for</IonLabel>
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
                name="newPassword"
                type="password"
                handleChange={handleChange}
              />
              <LoginTextInput
                type="password"
                placeholder="Confirm Password"
                name="newPasswordRepeated"
                handleChange={handleChange}
              />
              <LoginTextInput
                placeholder="Activation Code"
                name="activationCode"
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
});

export default NewPassword;
