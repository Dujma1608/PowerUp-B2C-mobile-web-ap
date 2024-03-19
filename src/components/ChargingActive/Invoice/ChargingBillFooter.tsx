import { IonImg } from "@ionic/react";
import mastercard from "../../../assets/images/Cards/mastercard.png";
import "./ChargingBillFooter.css";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";

interface Props {
  email: string | undefined;
}
const ChargingBillFooter: React.FC<Props> = ({ email }) => {
  const { profileStore } = useStore();
  const cardNo = "2234756492308463";
  const maskedCardNo =
    "•".repeat(4) + " " + cardNo.substring(cardNo.length - 4, cardNo.length);

  useEffect(() => {
    profileStore.getUserInfo();
  }, []);

  return (
    <div className="footer-bill-container">
      <div className="card-bill-flex">
        <IonImg
          style={{
            width: "42px",
            height: "24px",
            marginRight: "10px",
          }}
          src={mastercard}
        />
        <p className="font12 w500">{maskedCardNo}</p>
      </div>
      <p className="font10 w500 colorA6">
        Invoice sent to your email: {profileStore?.profile?.email}
      </p>
    </div>
  );
};

export default ChargingBillFooter;
