import { IonIcon, IonImg, IonItem, IonText } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import visaCard from "../../../assets/images/Cards/visa.png";
import mastercard from "../../../assets/images/Cards/mastercard.png";

interface Props {
  cardNo: string;
}

const CardListItem: React.FC<Props> = ({ cardNo }) => {
  const handleEditCard = () => {};

  const getCardType = (cardNo: string): "visa" | "mastercard" | null => {
    if (/^3/.test(cardNo)) {
      return "visa";
    } else if (/^5[1-5]/.test(cardNo)) {
      return "mastercard";
    }
    return null;
  };

  // Get the card type based on the card number
  const cardType = getCardType(cardNo);

  // Determine the card image based on the card type
  const cardImage =
    cardType === "visa"
      ? visaCard
      : cardType === "mastercard"
      ? mastercard
      : undefined;

  const maskedCardNo =
    "•".repeat(4) + " " + cardNo.substring(cardNo.length - 4, cardNo.length);

  return (
    <>
      <IonImg
        src={cardImage}
        style={{ width: "42px", height: "24px", marginRight: "10px" }}
      />
      <IonText className="font12 w500">{maskedCardNo}</IonText>
      <IonIcon
        icon={chevronForwardOutline}
        style={{ color: "#021F0E", fontSize: "19px" }}
        slot="end"
      />
    </>
  );
};

export default CardListItem;
