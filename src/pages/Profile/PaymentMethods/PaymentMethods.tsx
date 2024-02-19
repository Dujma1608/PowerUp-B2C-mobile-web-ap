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
  addOutline,
} from "ionicons/icons";
import { useState } from "react";
import { Router, useHistory } from "react-router";
import AddPayment from "./AddPayment";
import Card from "./PaymentMethodItem";
import CardListItem from "./PaymentMethodItem";
import { cards } from "../../../components/utils/utils";
import PaymentMethodItem from "./PaymentMethodItem";
import BackArrow from "../../../app/common/BackArrow";

const PaymentMethods: React.FC = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  const handleChangePassword = () => {
    history.push("/profile/account/password");
  };
  const handleAddPayment = () => {
    setOpenPaymentModal(true);
  };
  const handleCloseModal = () => {
    setOpenPaymentModal(false);
  };
  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <div style={{ marginBottom: "20px" }}>
        <BackArrow setClose={handleBack} />
      </div>
      <IonContent>
        <IonList>
          <IonItem lines="none">
            <IonText
              style={{ marginBottom: "10px" }}
              className="font18 w600 color021"
            >
              Payment Methods
            </IonText>
          </IonItem>
          {cards.map((card) => (
            <IonItem
              key={card.id}
              type="button"
              button
              routerLink={`/profile/payment/${card.id}`}
              lines="full"
              style={{
                padding: "10px 0",
                marginLeft: "10px",
                marginRight: "15px",
              }}
            >
              <PaymentMethodItem cardNo={card.cardNumber} />
            </IonItem>
          ))}
          <IonItem
            onClick={handleAddPayment}
            lines="full"
            style={{
              padding: "10px 0",
              marginLeft: "10px",
              marginRight: "15px",
            }}
          >
            <IonText className="font12 w500">Add Payment Method</IonText>
            <IonIcon
              icon={addOutline}
              style={{ color: "#021F0E", fontSize: "24px" }}
              slot="end"
            />
          </IonItem>
        </IonList>
      </IonContent>
      <AddPayment isOpen={openPaymentModal} setClose={handleCloseModal} />
    </IonPage>
  );
};

export default PaymentMethods;
