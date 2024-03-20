import {
  IonButton,
  IonIcon,
  IonLabel,
  IonSpinner,
  IonText,
} from "@ionic/react";
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
  const [submit, setSubmit] = useState(false);

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, "New password must be at least 8 characters long.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit."
      )
      .required("Password is required"),
    newPasswordRepeated: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm password is required"),
    activationCode: Yup.number().required("Activation code required"),
  });

  const isFormSubmittedRef = useRef(false);
  const history = useHistory();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: userEmail,
        companyId: 1,
        activationCode: "",
        newPassword: "",
        newPasswordRepeated: "",
      }}
      onSubmit={(values, { setErrors }) => {
        setSubmit(true);
        userStore
          .resetPassword(values)
          .then(() => history.push("/app"))
          .catch((error) => {
            if (error.response && error.response.data) {
              console.log(error.response.data.errors);
              setErrors(error.response.data.errors);
            }
          });
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isValid,
        isSubmitting,
        dirty,
      }) => (
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
                isDisabled={true}
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
                type="number"
                placeholder="Activation Code"
                name="activationCode"
                handleChange={handleChange}
              />
            </div>
            <IonButton
              className="register-button"
              type="submit"
              // disabled={
              //   !isValid || !dirty || values.activationCode.length !== 6
              // }
            >
              {isSubmitting && submit ? (
                <IonSpinner className="register-spinner" name="crescent" />
              ) : (
                <span>Reset Password</span>
              )}
            </IonButton>
          </div>
        </Form>
      )}
    </Formik>
  );
});

export default NewPassword;
