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

const BasicInfo: React.FC = () => {
  const validation = Yup.object({
    // firstName: Yup.string().required("First name is required"),
    // lastName: Yup.string().required("Last name is required"),
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
          initialValues={{ firstName: "", lastName: "" }}
          validationSchema={validation}
          onSubmit={() => {}}
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
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default BasicInfo;
