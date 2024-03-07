import { IonIcon } from "@ionic/react";
import "./PaymentHistory.css";
import {
  arrowDownCircle,
  arrowDownCircleOutline,
  arrowDownOutline,
} from "ionicons/icons";

interface Props {
  payment: Payment;
}

interface Payment {
  id: number;
  date: string;
  price: number;
  charged: string;
  pricePer: string;
}

const PaymentHistoryItem: React.FC<Props> = ({ payment }) => {
  return (
    <div className="history-flex">
      <div className="payment-history-info">
        <p className="font14 w600 color021">{payment.date}</p>
        <div className="flex-price">
          <p className="price">{payment.price} EUR</p>
          <p className="font12 w400">
            ({payment.charged}, {payment.pricePer})
          </p>
        </div>
      </div>
      <div>
        <button className="green-circle">
          <IonIcon
            icon={arrowDownOutline}
            style={{ color: "#fff", fontSize: "18px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default PaymentHistoryItem;
