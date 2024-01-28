import { IonContent, IonPage } from "@ionic/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";

const PasswordReset: React.FC = () => {
  const [isForgotPaswordStep, setIsForgotPaswordStep] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Incorrect email or password"),
  });

  const handleNext = () => {
    setIsForgotPaswordStep(false);
  };

  const handleBack = () => {
    setIsForgotPaswordStep(true);
  };

  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        {isForgotPaswordStep ? (
          <ForgotPassword handleNext={handleNext} setUserEmail={setUserEmail} />
        ) : (
          <NewPassword userEmail={userEmail} goBack={handleBack} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default PasswordReset;
