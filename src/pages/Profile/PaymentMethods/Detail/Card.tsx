// import { IonButton, IonContent, IonModal, IonPage } from "@ionic/react";
// import BackArrow from "../../BackArrow";
// import { useHistory } from "react-router";
// import "./Card.css";
// import visa from "../../../../assets/images/Cards/visa.png";
// import mastercard from "../../../../assets/images/Cards/mastercard.png";
// import { cards } from "../../../../components/utils/utils";
// import { useEffect, useState } from "react";

// const Card: React.FC = () => {
//   const history = useHistory();
//   const [cards, setCards] = useState([{}]);

//   useEffect(() => {
//     setCards(cards);
//   }, []);

//   const handleBack = () => {
//     history.goBack();
//   };
//   const getCardType = (cardNo: string): "visa" | "mastercard" | null => {
//     if (/^3/.test(cardNo)) {
//       return "visa";
//     } else if (/^5[1-5]/.test(cardNo)) {
//       return "mastercard";
//     }
//     return null;
//   };

//   // Get the card type based on the card number
//   const cardType = getCardType(cardNo);

//   // Determine the card image based on the card type
//   const cardImage =
//     cardType === "visa"
//       ? visa
//       : cardType === "mastercard"
//       ? mastercard
//       : undefined;

//   const maskedCardNo =
//     "•".repeat(4) + " " + cardNo.substring(cardNo.length - 4, cardNo.length);

//   return (
//     <IonPage style={{ padding: "30px 15px" }}>
//       <BackArrow setClose={handleBack} />
//       <IonContent className="ion-padding">
//         <div className="card-detail-container">
//           <div>
//             <div>
//               <p>Visa</p>
//               <img
//                 src={cardImage}
//                 style={{ width: "42px", height: "24px", marginRight: "10px" }}
//               />
//             </div>
//           </div>
//           <div></div>
//           <div className="account-info-buttons">
//             <IonButton className="login-button w600 font12">Edit</IonButton>
//             <IonButton className="delete w600 font12">
//               Remove payment method
//             </IonButton>
//           </div>
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Card;
