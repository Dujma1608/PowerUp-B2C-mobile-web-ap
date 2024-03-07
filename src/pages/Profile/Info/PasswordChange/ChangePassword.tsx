import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonSpinner,
  IonText,
} from "@ionic/react";
import { Form, Formik } from "formik";
import { arrowBackOutline, eyeOffOutline, pencil } from "ionicons/icons";
import { useHistory } from "react-router";
import { passwordValidation } from "../../../../components/FormUtils/Validation";
import LoginTextInput from "../../../../components/LoginForm/LoginTextInput";
import "./ChangePassword.css";
import BackArrow from "../../../../app/common/BackArrow";
import { useState } from "react";
import { useStore } from "../../../../app/stores/store";

const ChangePassword: React.FC = () => {
  const history = useHistory();

  const { profileStore } = useStore();
  const { profile, updatePassword } = profileStore;
  const [submitting, setSubmitting] = useState(false);

  const handleBack = () => {
    history.goBack();
  };
  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <div style={{ marginBottom: "20px" }}>
        <BackArrow setClose={handleBack} />
      </div>
      <IonContent className="ion-padding">
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            newPasswordRepeated: "",
          }}
          validationSchema={passwordValidation}
          onSubmit={(values) => {
            setSubmitting(true);
            updatePassword(values);

            setTimeout(() => {
              history.push("/profile/account");
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ handleChange, isValid, dirty }) => (
            <Form>
              <p className="font18 w600 color021 marginBottom">Old Password</p>
              <LoginTextInput
                placeholder="Current Password"
                name="oldPassword"
                type="password"
                handleChange={handleChange}
                isLogin={true}
              />

              <p className="font18 w600 color021 marginBottom">New Password</p>
              <LoginTextInput
                placeholder="New Password"
                name="newPassword"
                type="password"
                handleChange={handleChange}
                isLogin={true}
              />
              <LoginTextInput
                placeholder="Confirm Password"
                name="newPasswordRepeated"
                type="password"
                handleChange={handleChange}
                isLogin={true}
              />
              <IonButton
                type="submit"
                className={
                  !isValid || !dirty ? "update-disabled" : "update-button"
                }
                disabled={!isValid || !dirty}
              >
                {submitting ? (
                  <IonSpinner className="register-spinner" name="crescent" />
                ) : (
                  <span>Update</span>
                )}
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default ChangePassword;
