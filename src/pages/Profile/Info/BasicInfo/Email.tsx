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
import BackArrow from "../../../../app/common/BackArrow";

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
      <div style={{ marginBottom: "20px" }}>
        <BackArrow setClose={handleBack} />
      </div>
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
