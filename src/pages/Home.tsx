import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonText>
          <h1>Home</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
