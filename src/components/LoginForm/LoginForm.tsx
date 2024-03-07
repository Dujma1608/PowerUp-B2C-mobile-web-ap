import { IonButton, IonLabel, IonSpinner, IonText } from "@ionic/react";
import "../../pages/Login/Login.css";
import { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { loginValidation } from "../FormUtils/Validation";
import LoginTextInput from "./LoginTextInput";
import { nuclearOutline } from "ionicons/icons";
import { observer } from "mobx-react-lite";

interface Props {
  setToast: (state: boolean) => void;
}
const LoginForm: React.FC<Props> = observer(({ setToast }) => {
  const { userStore } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
    companyId: 1,
    error: null,
  };

  const handleCreateAccount = () => {
    history.push("/register");
  };
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action === "POP") {
        // User is attempting to navigate back
        // Add your logic here, such as redirecting to another page
        history.push("/login");
      }
    });

    return () => {
      // Cleanup function to unsubscribe from history listener
      unlisten();
    };
  }, [history]);
  return (
    <Formik
      validationSchema={loginValidation}
      initialValues={initialValues}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        setSubmitting(true);

        userStore
          .login(values)
          .then(() => {
            setErrors({});
            setSubmitting(false);
            history.push("/app/home");
          })
          .catch((error) => {
            setSubmitting(false);
            setToast(true);
          });
      }}
    >
      {({
        handleSubmit,
        handleChange,
        errors,
        isSubmitting,
        values,
        isValid,
        dirty,
      }) => (
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
            {/* <div style={{ width: "100%", height: "10px" }}>
              <IonText className="validator-message" color="danger">
                {errors.error}
              </IonText>
            </div> */}
          </div>
          <div className="buttons-container-login">
            <IonButton className="login-button" type="submit">
              {isSubmitting && !errors.error && isValid ? (
                <IonSpinner className="register-spinner" name="crescent" />
              ) : (
                <span className="buttonText">Login</span>
              )}
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
            <IonButton
              routerLink="/register"
              className="create-account-button"
              onClick={handleCreateAccount}
            >
              <span className="buttonText">Create an Account</span>
            </IonButton>
          </div>
        </Form>
      )}
    </Formik>
  );
});

export default LoginForm;
