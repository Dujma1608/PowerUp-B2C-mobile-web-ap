import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonIcon,
  IonInput,
  IonLabel,
  IonText,
} from "@ionic/react";
import { Field, Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import * as Yup from "yup";
import "./RegisterForm.css";
import { Link, useHistory } from "react-router-dom";
import { arrowBackOutline } from "ionicons/icons";
import { registerValidation } from "../../utils/validation/FormValidation";
import { useState } from "react";

const RegisterForm: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const history = useHistory();

  const handleChangeChecked = (e: any) => {
    const { name, checked } = e.target;
    console.log(checked);
    console.log(name);
    setInitialValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  return (
    <Formik
      validateOnMount={true}
      validationSchema={registerValidation}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, handleSubmit, isValid, dirty }) => (
        <Form
          className="register-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="back-container">
            <IonButton
              className="backButton"
              slot="start"
              onClick={() => history.push("/login")}
            >
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </div>
          <div className="titles-container">
            <IonLabel className="title">Please enter your details</IonLabel>
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
              showGreenTick={true}
              handleChange={handleChange}
            />
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
              name="confirmPassword"
              showGreenTick={true}
              handleChange={handleChange}
            />
          </div>
          <div className="bottom-container">
            <div className="checkbox-container">
              <Field
                style={{ width: "16px", height: "16px", marginRight: "8px" }}
                type="checkbox"
                name="agreeToTerms"
                checked={values.agreeToTerms}
                value={values.agreeToTerms}
              />
              <IonText>
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
                disabled={!isValid || !dirty}
              >
                <span>Continue</span>
              </IonButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
