import React, { useEffect, useState } from "react";
import { IonContent, IonIcon, IonPage, IonToast } from "@ionic/react";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { checkmarkOutline } from "ionicons/icons";
import { useStore } from "../../app/stores/store";

const Login: React.FC = () => {
  const { regularStore, userStore } = useStore();
  const [loginError, setLoginError] = useState(false);

  const handleToastClose = () => {
    setLoginError(false);
  };

  return (
    <IonPage>
      <IonContent>
        <LoginForm setToast={setLoginError} />
        <IonToast
          className="login-toast"
          isOpen={loginError}
          onIonToastDidDismiss={handleToastClose}
          message="Invalid email or password"
          duration={2000}
        >
          <IonIcon slot="end" icon={checkmarkOutline} />
        </IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Login;
