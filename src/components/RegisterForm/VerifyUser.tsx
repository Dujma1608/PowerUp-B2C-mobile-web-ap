import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import { Form, Formik } from "formik";
import { useStore } from "../../app/stores/store";
import { useHistory } from "react-router-dom";

const VerifyUser: React.FC = () => {
  const { userStore, regularStore } = useStore();
  const { user } = userStore;
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Formik
          initialValues={{ userId: user?.id!, activationCode: "" }}
          onSubmit={(values) => {
            console.log(values);
            userStore.verifyUser(values);
            history.push("/app/home");
          }}
        >
          {({ values, isSubmitting, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <IonInput
                type="number"
                name="activationCode"
                label="Activation Code"
                onIonChange={handleChange}
              />
              <IonButton className="register-button" type="submit">
                Verify
                {/* {isSubmitting && submit ? (
                  <IonSpinner className="register-spinner" name="crescent" />
                ) : (
                  <span>Continue</span>
                )} */}
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default VerifyUser;
