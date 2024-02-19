import {
  IonButton,
  IonContent,
  IonItem,
  IonModal,
  IonPage,
} from "@ionic/react";
import BackArrow from "../../../../app/common/BackArrow";
import { useHistory } from "react-router";
import "./Card.css";
import visa from "../../../../assets/images/Cards/visa.png";
import mastercard from "../../../../assets/images/Cards/mastercard.png";
import { cards } from "../../../../components/utils/utils";
import { useEffect, useRef, useState } from "react";
import SureModal from "../../../../app/common/tabbar/SureModal";

const Card: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const history = useHistory();
  const [cards, setCards] = useState([{}]);

  const modalTitle = "Remove payment method";
  const modalSubtitle = "Are you sure you want to delete this payment method?";
  const modalButtonText = "Delete";

  const CardNo = "5479732511112222";
  useEffect(() => {
    setCards(cards);
  }, []);

  const handleBack = () => {
    history.goBack();
  };

  function dismiss() {
    modal.current?.dismiss();
  }

  const getCardType = (cardNo: string): "visa" | "mastercard" | null => {
    if (/^3/.test(cardNo)) {
      return "visa";
    } else if (/^5[1-5]/.test(cardNo)) {
      return "mastercard";
    }
    return null;
  };

  // Get the card type based on the card number
  const cardType = getCardType(CardNo);

  // Determine the card image based on the card type
  const cardImage =
    cardType === "visa"
      ? visa
      : cardType === "mastercard"
      ? mastercard
      : undefined;

  const maskedCardNo =
    "•".repeat(4) + " " + CardNo.substring(CardNo.length - 4, CardNo.length);

  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <div style={{ marginBottom: "20px" }}>
        <BackArrow setClose={handleBack} />
      </div>

      <IonContent className="ion-padding">
        <div className="card-detail-container">
          <div>
            <div>
              <div className="flex-card">
                <p className="font20 w600">{cardType}</p>
                <img
                  src={cardImage}
                  style={{ width: "42px", height: "24px", marginRight: "10px" }}
                />
              </div>
              <div>
                <p className="font14 w500" style={{ marginBottom: "30px" }}>
                  {maskedCardNo}
                </p>
              </div>
            </div>
            <div>
              <p className="font14 w500 colorA6">Expiry Date</p>
              <p className="font14 w600 color021">07/25</p>
            </div>
          </div>
          <div className="card-buttons-container">
            <IonButton className="login-button w600 font12">Edit</IonButton>
            <IonButton id="open-sure-modal" className="delete w600 font12">
              Remove payment method
            </IonButton>
          </div>
        </div>
        <SureModal
          title={modalTitle}
          subtitle={modalSubtitle}
          buttonText={modalButtonText}
        />
      </IonContent>
    </IonPage>
  );
};

export default Card;
