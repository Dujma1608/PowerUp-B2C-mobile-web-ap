import { IonButton, IonInput, IonLabel, IonText } from "@ionic/react";
import "../../pages/Login/Login.css";
import { useRef, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { loginValidation } from "../../utils/validation/FormValidation";
import LoginTextInput from "./LoginTextInput";

const LoginForm: React.FC = () => {
  const { userStore } = useStore();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const history = useHistory();

  return (
    <Formik
      validationSchema={loginValidation}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, values, handleChange }) => (
        <Form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="titles-container">
            <IonLabel className="title">Login to your account</IonLabel>
            <IonText className="login-subtitle">
              Please enter your credentials to proceed
            </IonText>
          </div>
          <div className="input-container">
            <LoginTextInput
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              handleChange={handleChange}
            />
            <LoginTextInput
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
          </div>
          <div className="buttons-container-login">
            <IonButton className="login-button" type="submit">
              <span>Login</span>
            </IonButton>

            <IonText className="forgot-password">
              <Link
                style={{ textDecoration: "none", color: "#021F0E" }}
                to="/login/forgot-password"
              >
                Forgot Password?
              </Link>
            </IonText>

            <div className="divider-container">
              <div className="divider-line"></div>
              <div className="or-text">or</div>
            </div>
            <IonButton
              className="create-account-button"
              onClick={() => history.push("/register")}
            >
              <span>Create an Account</span>
            </IonButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
