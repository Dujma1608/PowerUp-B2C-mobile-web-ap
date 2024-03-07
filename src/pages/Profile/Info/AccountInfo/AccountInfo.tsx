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
import BackArrow from "../../../../app/common/BackArrow";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { useEffect } from "react";
import SureModal from "../../../../app/common/tabbar/SureModal";

const AccountInfo: React.FC = observer(() => {
  const { userStore, profileStore } = useStore();
  const { profile } = profileStore;
  const history = useHistory();

  const modalTitle = "Log Out";
  const modalSubtitle = "Are you sure you want to log out?";
  const modalButtonText = "Log Out";

  const handleBack = () => {
    history.push("/app/profile");
  };
  const handleChangePassword = () => {
    history.push("/profile/account/password");
  };
  const handleChangeName = () => {
    history.push("/profile/account/info");
  };

  const handleLogOut = () => {
    userStore.logout();
    history.push("/login");
  };

  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <div style={{ marginBottom: "20px" }}>
        <BackArrow setClose={handleBack} />
      </div>
      <IonContent>
        <IonList>
          <IonItem lines="none">
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
            <IonText className="font18 w600 color021">Basic Info</IonText>
          </IonItem>
          <IonItem
            onClick={handleChangeName}
            lines="full"
            style={{ padding: "10px 0" }}
          >
            <IonText className="font12 w500">
              {profile?.firstName} {profile?.lastName}
            </IonText>
            <IonIcon
              icon={chevronForwardOutline}
              style={{ color: "#021F0E", fontSize: "19px" }}
              slot="end"
            />
          </IonItem>
          <IonItem lines="full" style={{ padding: "10px 0" }}>
            <IonText className="font12 w500">{profile?.email}</IonText>
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
        </IonList>
        <div className="account-info-buttons">
          <IonButton
            id="open-sure-modal"
            className="login-button font12 w600"
            // onClick={handleLogOut}
          >
            Log Out
          </IonButton>
        </div>
        <SureModal
          title={modalTitle}
          subtitle={modalSubtitle}
          buttonText={modalButtonText}
          isLoggingOut
        />
      </IonContent>
    </IonPage>
  );
});

export default AccountInfo;
