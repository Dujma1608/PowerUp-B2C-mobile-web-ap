import { IonButton, IonLabel, IonText } from "@ionic/react";
import "../../pages/Login/Login.css";
import { useState } from "react";
import { Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { loginValidation } from "../FormUtils/Validation";
import LoginTextInput from "./LoginTextInput";

const LoginForm: React.FC = () => {
  const { userStore } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      validationSchema={loginValidation}
      initialValues={initialValues}
      onSubmit={(values) => {
        if (loginValidation.isValidSync(values)) {
          console.log(values);
          history.push("/home");
        }
      }}
    >
      {({ handleSubmit, handleChange }) => (
        <Form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="titles-container">
            <IonLabel className="title-login">Login to your account</IonLabel>
            <IonText className="login-subtitle">
              Please enter your credentials to proceed
            </IonText>
          </div>
          <div className="input-container">
            <LoginTextInput
              placeholder="Email"
              name="email"
              type="email"
              handleChange={handleChange}
              isLogin={false}
            />
            <LoginTextInput
              type="password"
              placeholder="Password"
              name="password"
              handleChange={handleChange}
              isLogin={false}
            />
          </div>
          <div className="buttons-container-login">
            <IonButton className="login-button" type="submit">
              <span>Login</span>
            </IonButton>

            <IonText className="forgot-password">
              <Link
                style={{ textDecoration: "none", color: "#021F0E" }}
                to="/login/password-reset"
              >
                Forgot Password?
              </Link>
            </IonText>

            <div className="divider-container">
              <div className="divider-line"></div>
              <div className="or-text">or</div>
            </div>
            <IonButton className="create-account-button" href="/register">
              <span>Create an Account</span>
            </IonButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
