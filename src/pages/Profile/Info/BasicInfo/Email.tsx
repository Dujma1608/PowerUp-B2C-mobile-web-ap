import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonPage,
  IonText,
} from "@ionic/react";
import { Form, Formik } from "formik";
import { arrowBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import * as Yup from "yup";
import "./BasicInfo.css";
import InfoInput from "./InfoInput";

const Email: React.FC = () => {
  const validation = Yup.object({
    email: Yup.string().required("Email is required").email(),
  });
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
          initialValues={{ email: "" }}
          validationSchema={validation}
          onSubmit={() => {}}
        >
          {({ handleChange }) => (
            <Form>
              <p className="font18 w600 color021 marginBottom">E-mail</p>
              <InfoInput
                placeholder="Emai"
                name="email"
                type="email"
                handleChange={handleChange}
              />
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default Email;
