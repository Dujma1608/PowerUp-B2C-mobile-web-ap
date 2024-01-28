import { IonContent, IonPage } from "@ionic/react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage style={{ height: "100vh" }}>
      <IonContent>
        <RegisterForm />
      </IonContent>
    </IonPage>
  );
};

export default Register;
