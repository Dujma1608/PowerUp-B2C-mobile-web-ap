import { SessionResponse } from "../../app/models/session";
import Icon from "../../assets/images/Charging/LightingIcon.png";

interface Props {
  session: SessionResponse | null;
  power: number | undefined;
}

const ChargingScreenPowerInfo: React.FC<Props> = ({ session, power }) => {
  return (
    <div className="info-active">
      <div className="icon-status">
        <img width={6} height={10} src={Icon} />
        <h3 className="f14-green w600">Connected</h3>
      </div>
      <p className="power w700">{power ?? 0} kW</p>
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
