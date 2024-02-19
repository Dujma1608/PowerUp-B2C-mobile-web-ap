import { IonContent, IonItem, IonList, IonPage, IonText } from "@ionic/react";
import "./PaymentHistory.css";
import BackArrow from "../../../app/common/BackArrow";
import { useHistory } from "react-router";
import PaymentHistoryItem from "./PaymentHistoryItem";

const PaymentHistory: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  const payments = [
    {
      id: 1,
      date: "21. Oct, 2022, 12:40:01",
      price: 20.25,
      charged: "40,5kWh",
      pricePer: "EUR 0,50/kWh",
    },
    {
      id: 2,
      date: "11. Mar, 2022, 12:40:01",
      price: 51.25,
      charged: "100,5kWh",
      pricePer: "EUR 0,50/kWh",
    },
    {
      id: 3,
      date: "07. Dec, 2022, 12:40:01",
      price: 30.25,
      charged: "60,5kWh",
      pricePer: "EUR 0,50/kWh",
    },
  ];

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
              Payment History
            </IonText>
          </IonItem>
          {payments.map((payment) => (
            <IonItem
              key={payment.id}
              lines="inset"
              style={{ padding: "10px 0", marginRight: "15px" }}
            >
              <PaymentHistoryItem payment={payment} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PaymentHistory;
