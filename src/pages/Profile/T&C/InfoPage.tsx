import {
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import BackArrow from "../../../app/common/BackArrow";
import { useHistory } from "react-router";
import { chevronForwardOutline } from "ionicons/icons";

const InfoPage: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <div style={{ marginBottom: "50px" }}>
        <BackArrow setClose={handleBack} />
      </div>
      <IonContent>
        <IonList>
          <IonItem lines="none" style={{ marginBottom: "20px" }}>
            <IonText className="font18 w600 color021">Info</IonText>
          </IonItem>
          <IonItem
            style={{ padding: "10px 0" }}
            routerLink={"/profile/info/terms&conditions"}
          >
            <IonText className="font14 w500">Terms & Conditions</IonText>
            <IonIcon
              icon={chevronForwardOutline}
              style={{ color: "#021F0E", fontSize: "19px" }}
              slot="end"
            />
          </IonItem>
          <IonItem
            style={{ padding: "10px 0" }}
            routerLink={"/profile/info/data-protection"}
          >
            <IonText className="font14 w500">Data protection</IonText>
            <IonIcon
              icon={chevronForwardOutline}
              style={{ color: "#021F0E", fontSize: "19px" }}
              slot="end"
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
