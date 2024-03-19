import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonSpinner,
  IonText,
} from "@ionic/react";
import { Field, Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import * as Yup from "yup";
import "./RegisterForm.css";
import { Link, useHistory } from "react-router-dom";
import { arrowBackOutline } from "ionicons/icons";
import { registerValidation } from "../FormUtils/Validation";
import { useState } from "react";
import UserStore from "../../app/stores/userStore";
import { useStore } from "../../app/stores/store";
import BackArrow from "../../app/common/BackArrow";
import { observer } from "mobx-react-lite";

const RegisterForm: React.FC = observer(() => {
  const { userStore, regularStore } = useStore();
  const [submit, setSubmit] = useState(false);

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    companyId: 1,
    error: null,
  });
  const history = useHistory();

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    console.log(checked);
    setAgreeToTerms(checked);
    console.log("Agree", agreeToTerms);
  };
  const handleBack = () => {
    history.push("/login");
  };

  return (
    <Formik
      validateOnMount={true}
      validationSchema={registerValidation}
      initialValues={initialValues}
      onSubmit={(values, { setErrors }) => {
        setSubmit(true);
        userStore
          .register(values)
          .then(() => {
            regularStore.setIsRegistered(true);
            history.push("/register/verify");
          })
          .catch((error) => {
            setSubmit(false);
            setErrors({ error: "User with this email already exist" });
          });
      }}
    >
      {({
        errors,
        values,
        handleChange,
        handleSubmit,
        isValid,
        dirty,
        isSubmitting,
      }) => (
        <Form
          className="register-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <BackArrow setClose={handleBack} />
          </div>
          <div className="titles-container">
            <IonLabel className="title-login">
              Please enter your details
            </IonLabel>
          </div>
          <div className="input-container">
            <MyTextInput
              label="First Name (optional)"
              placeholder="First Name"
              name="firstName"
              type="text"
              handleChange={handleChange}
            />
            <MyTextInput
              label="Last Name (optional)"
              placeholder="Last Name"
              name="lastName"
              type="text"
              handleChange={handleChange}
            />
            <MyTextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              handleChange={handleChange}
              errors={errors}
              isEmail
            />

            {/* <div style={{ width: "100%", height: "10px" }}>
                  <IonText className="validator-message" color="danger">
                    {errors.error}
                  </IonText>
                </div> */}
            <MyTextInput
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              showGreenTick={true}
              handleChange={handleChange}
            />
            <MyTextInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              name="repeatPassword"
              showGreenTick={true}
              handleChange={handleChange}
            />
          </div>
          <div className="bottom-container">
            <div className="checkbox-container">
              <input
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "8px",
                  marginTop: "10px",
                }}
                type="checkbox"
                onChange={handleChangeChecked}
                checked={agreeToTerms}
              />
              <IonText style={{ marginTop: "10px" }}>
                I agree to the{" "}
                <Link className="blue-no-underline" to="/termsAndConditions">
                  Terms and Conditions
                </Link>{" "}
                and
              </IonText>
            </div>
            <div>
              <IonButton
                className="register-button"
                type="submit"
                disabled={!isValid || !dirty || !agreeToTerms}
              >
                {isSubmitting && submit ? (
                  <IonSpinner className="register-spinner" name="crescent" />
                ) : (
                  <span>Continue</span>
                )}
              </IonButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
});

export default RegisterForm;
