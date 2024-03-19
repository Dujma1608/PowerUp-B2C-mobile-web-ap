import { SessionResponse } from "../../app/models/session";
import Icon from "../../assets/images/Charging/LightingIcon.png";

interface Props {
  session: SessionResponse | null;
}

const ChargingScreenPowerInfo: React.FC<Props> = ({ session }) => {
  return (
    <div className="info-active">
      <div className="icon-status">
        <img width={6} height={10} src={Icon} />
        <h3 className="f14-green w600">Connected</h3>
      </div>
      <p className="power w700">100 kWh</p>
      <p className="price">
        Electricity Price:{" "}
        <strong className="text w500">
          {session?.currency.currencyISO} {session?.pricePerKwh}/kWh
        </strong>
      </p>
    </div>
  );
};

export default ChargingScreenPowerInfo;
