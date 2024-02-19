import { IonIcon, IonItem, IonList, IonPage, IonText } from "@ionic/react";
import TabBar from "../../app/common/tabbar/TabBar";
import {
  person,
  cardOutline,
  settingsOutline,
  receiptOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import "./Profile.css";
import { useHistory } from "react-router";

const Profile: React.FC = () => {
  const history = useHistory();

  const handleUserClick = () => {
    history.push("/profile/account");
  };
  return (
    <IonPage>
      <IonList style={{ padding: "20px 25px 20px 5px" }}>
        <IonItem style={{ margin: "15px 0", padding: "10px 0" }}>
          <div className="profile-header" onClick={handleUserClick}>
            <IonText className="font18 w600 color021">Josip Dujmović</IonText>
            <div className="user-circle">
              <IonIcon
                icon={person}
                size="large"
                style={{ color: "#A6A6A6" }}
              />
            </div>
          </div>
        </IonItem>
        <IonItem style={{ padding: "10px 0" }} routerLink={"/profile/payment"}>
          <IonIcon
            icon={cardOutline}
            style={{ color: "#021F0E", marginRight: "8px" }}
            size="small"
            aria-hidden="true"
          />
          <IonText className="font14 w500">Payment methods</IonText>
          <IonIcon
            icon={chevronForwardOutline}
            style={{ color: "#021F0E", fontSize: "19px" }}
            slot="end"
          />
        </IonItem>
        <IonItem
          routerLink={"/profile/payment-history"}
          style={{ padding: "10px 0" }}
        >
          <IonIcon
            icon={receiptOutline}
            style={{ color: "#021F0E", marginRight: "8px" }}
            size="small"
            aria-hidden="true"
          />
          <IonText className="font14 w500">Payment history</IonText>
          <IonIcon
            icon={chevronForwardOutline}
            style={{ color: "#021F0E", fontSize: "19px" }}
            slot="end"
          />
        </IonItem>
        <IonItem style={{ padding: "10px 0" }} routerLink={"/profile/info"}>
          <IonIcon
            icon={settingsOutline}
            style={{ color: "#021F0E", marginRight: "8px" }}
            size="small"
            aria-hidden="true"
          />
          <IonText className="font14 w500">Info</IonText>
          <IonIcon
            icon={chevronForwardOutline}
            style={{ color: "#021F0E", fontSize: "19px" }}
            slot="end"
          />
        </IonItem>
      </IonList>
      <TabBar />
    </IonPage>
  );
};

export default Profile;
