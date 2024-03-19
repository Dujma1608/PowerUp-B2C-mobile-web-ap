import { IonIcon } from "@ionic/react";
import { checkmarkSharp } from "ionicons/icons";
import { observer } from "mobx-react-lite";

interface Props {
  price: number | undefined;
}
const ChargingBillFinalPrice: React.FC<Props> = observer(({ price }) => {
  return (
    <div className="bill-address-flex">
      <div style={{ width: "125px" }}>
        <p className="font10 w600 colorA6">Total Bill</p>
        <p className="font12 w600 color021" style={{ fontSize: "22px" }}>
          {price} EUR
        </p>
      </div>
      <div className="completed-green-div">
        <IonIcon
          src={checkmarkSharp}
          style={{ fontSize: "10px", color: "#3ACE7A" }}
        />
        <p className="font10 w500" style={{ color: "#3ACE7A" }}>
          Completed
        </p>
      </div>
    </div>
  );
});

export default ChargingBillFinalPrice;
