import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};

export default Login;
