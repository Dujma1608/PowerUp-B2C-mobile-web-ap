import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonPage,
  IonSpinner,
  IonText,
} from "@ionic/react";
import { Form, Formik } from "formik";
import { arrowBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import * as Yup from "yup";
import "./BasicInfo.css";
import InfoInput from "./InfoInput";
import BackArrow from "../../../../app/common/BackArrow";
import { useStore } from "../../../../app/stores/store";
import { useEffect, useState } from "react";

const BasicInfo: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { profileStore } = useStore();
  const { profile, getUserInfo, updateUserName } = profileStore;
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (submitting) getUserInfo();
  }, [submitting, getUserInfo, profile]);

  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <div style={{ marginBottom: "20px" }}>
        <BackArrow setClose={handleBack} />
      </div>
      <IonContent className="ion-padding">
        <Formik
          initialValues={{
            firstName: profile?.firstName,
            lastName: profile?.lastName,
          }}
          onSubmit={(values) => {
            setSubmitting(true);
            updateUserName(values);

            setTimeout(() => {
              setSubmitting(false);
              history.push("/profile/account");
            }, 400);
          }}
        >
          {({ handleChange }) => (
            <Form>
              <p className="font18 w600 color021 marginBottom">Basic Info</p>
              <InfoInput
                placeholder="First Name"
                name="firstName"
                type="text"
                handleChange={handleChange}
              />
              <InfoInput
                placeholder="Last Name"
                name="lastName"
                type="text"
                handleChange={handleChange}
              />
              <IonButton
                className="update-button"
                type="submit"
                disabled={submitting}
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

export default BasicInfo;
