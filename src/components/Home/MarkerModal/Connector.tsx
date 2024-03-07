import { ChargerData } from "../../../app/models/connector";
import "./Connector.css";

interface Props {
  connector: ChargerData;
}

const Connector: React.FC<Props> = ({ connector }) => {
  return (
    <div className="charger-info-flex">
      <div className="column">
        <p className="font12 w400 color021">{connector.connectorName}</p>
        <p className="font10 colorA6 w400">
          {connector.currencyIso} {connector.pricePerKwh}/kWh
        </p>
      </div>
      <div className="column">
        <div className="flex-little">
          <p className="font12 color021 w700">{connector.electricCurrent}</p>
          <p
            className={
              connector.connectorStatus === "Available"
                ? "font10 w500 color0ABgreen"
                : "font10 colorA6 w500"
            }
          >
            {connector.connectorStatus}
          </p>
        </div>
        <p className="font10 w400 color021">Max Power: 300kW</p>
      </div>
    </div>
  );
};

export default Connector;
