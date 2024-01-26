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
import { Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import * as Yup from "yup";
import "./RegisterForm.css";
import { Link, useHistory } from "react-router-dom";
import { arrowBackOutline } from "ionicons/icons";
import { registerValidation } from "../../utils/validation/FormValidation";

const RegisterForm: React.FC = () => {
  const history = useHistory();

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
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, handleSubmit, touched, errors }) => (
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
              value={values.firstName}
              handleChange={handleChange}
            />
            <MyTextInput
              label="Last Name (optional)"
              placeholder="Last Name"
              name="firstName"
              type="text"
              value={values.lastName}
              handleChange={handleChange}
            />
            <MyTextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              handleChange={handleChange}
            />
            <MyTextInput
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              showGreenTick={true}
              value={values.password}
              handleChange={handleChange}
            />
            <MyTextInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              showGreenTick={true}
              value={values.confirmPassword}
              handleChange={handleChange}
            />
          </div>
          <div className="bottom-container">
            <div className="checkbox-container">
              <IonCheckbox />
              <IonText>
                I agree to the{" "}
                <Link className="blue-no-underline" to="/termsAndConditions">
                  Terms and Conditions
                </Link>{" "}
                and
              </IonText>
            </div>
            <div>
              <IonButton className="register-button" type="submit">
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
