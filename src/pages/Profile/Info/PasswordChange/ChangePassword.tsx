import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import { Form, Formik } from "formik";
import { arrowBackOutline, eyeOffOutline, pencil } from "ionicons/icons";
import { useHistory } from "react-router";
import { passwordValidation } from "../../../../components/FormUtils/Validation";
import LoginTextInput from "../../../../components/LoginForm/LoginTextInput";
import "./ChangePassword.css";

const ChangePassword: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <IonButton className="backButton" slot="start" onClick={handleBack}>
        <IonIcon
          icon={arrowBackOutline}
          style={{ color: "#000", fontSize: "24px" }}
        />
      </IonButton>
      <IonContent className="ion-padding">
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={passwordValidation}
          onSubmit={() => {}}
        >
          {({ handleChange, isValid, dirty }) => (
            <Form>
              {!isValid || !dirty ? (
                <>
                  <p className="font18 w600 color021 marginBottom">Password</p>
                  <LoginTextInput
                    placeholder="Current Password"
                    name="currentPassword"
                    type="password"
                    handleChange={handleChange}
                    isLogin={true}
                    inputDisabled
                  />
                </>
              ) : null}

              <p className="font18 w600 color021 marginBottom">New Password</p>
              <LoginTextInput
                placeholder="New Password"
                name="password"
                type="password"
                handleChange={handleChange}
                isLogin={true}
              />
              <LoginTextInput
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                handleChange={handleChange}
                isLogin={true}
              />
              <IonButton
                className={
                  !isValid || !dirty ? "update-disabled" : "update-button"
                }
                disabled={!isValid || !dirty}
              >
                Update
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default ChangePassword;
