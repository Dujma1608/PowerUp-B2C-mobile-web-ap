import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import {
  person,
  chevronForwardOutline,
  arrowBackOutline,
  pencil,
} from "ionicons/icons";
import "./AccountInfo.css";
import { Router, useHistory } from "react-router";

const AccountInfo: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  const handleChangePassword = () => {
    history.push("/profile/account/password");
  };
  const handleChangeName = () => {
    history.push("/profile/account/info");
  };
  const handleChangeEmail = () => {
    history.push("/profile/account/email");
  };
  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <IonButton className="backButton" slot="start" onClick={handleBack}>
        <IonIcon
          icon={arrowBackOutline}
          style={{ color: "#000", fontSize: "24px" }}
        />
      </IonButton>
      <IonContent>
        <IonList>
          <IonItem lines="none" style={{ margin: "15px 0", padding: "10px 0" }}>
            <div className="accountInfo-header">
              <IonText className="font18 w600 color021">Account Info</IonText>
              <div className="circle-info">
                <IonIcon
                  icon={person}
                  style={{ color: "#A6A6A6", fontSize: "42px" }}
                />
              </div>
              <div className="small-circle">
                <IonIcon icon={pencil} />
              </div>
            </div>
          </IonItem>
          <IonItem lines="none">
            <IonText
              style={{ marginBottom: "10px" }}
              className="font18 w600 color021"
            >
              Basic Info
            </IonText>
          </IonItem>
          <IonItem
            onClick={handleChangeName}
            lines="full"
            style={{ padding: "10px 0" }}
          >
            <IonText className="font12 w500">Josip Dujmović</IonText>
            <IonIcon
              icon={chevronForwardOutline}
              style={{ color: "#021F0E", fontSize: "19px" }}
              slot="end"
            />
          </IonItem>
          <IonItem
            onClick={handleChangeEmail}
            lines="full"
            style={{ padding: "10px 0" }}
          >
            <IonText className="font12 w500">josip@gmail.com</IonText>
            <IonIcon
              icon={chevronForwardOutline}
              style={{ color: "#021F0E", fontSize: "19px" }}
              slot="end"
            />
          </IonItem>
          <IonItem lines="none">
            <IonText
              className="font18 w600 color021"
              style={{ margin: "15px 0" }}
            >
              Password
            </IonText>
          </IonItem>
          <IonItem
            button={true}
            onClick={handleChangePassword}
            lines="full"
            style={{ padding: "10px 0" }}
          >
            <IonText className="font12 w500">Change password</IonText>
            <IonIcon
              icon={chevronForwardOutline}
              style={{ color: "#021F0E", fontSize: "19px" }}
              slot="end"
            />
          </IonItem>
          <div className="account-info-buttons">
            <IonButton className="login-button font12 w600">Log Out</IonButton>
            <IonButton className="delete w600 font12">Delete Account</IonButton>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AccountInfo;
