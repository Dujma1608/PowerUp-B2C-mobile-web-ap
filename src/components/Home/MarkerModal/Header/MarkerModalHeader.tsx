import { Charger } from "../../../../app/models/charger";

interface Props {
  address: string | null;
  distance: string | number | null;
  charger: Charger;
}

const MarkerModalHeader: React.FC<Props> = ({ address, distance, charger }) => {
  return (
    <div className="header-flex">
      <h3 className="energize-title">Energize</h3>
      <p className="font14 w500 colorA6">{address}</p>
      <div className="flex-row">
        <p className="font12 w500">{distance}</p>
        <p className="connectorsNumber w700">
          {charger.availableConnectorsCount}
          <span className="connectorsNumber w500">
            /{charger.connectorsCount} Connectors
          </span>
        </p>
      </div>
    </div>
  );
};

export default MarkerModalHeader;
