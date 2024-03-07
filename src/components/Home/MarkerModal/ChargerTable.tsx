import Connector from "./Connector";
import "./ChargerTable.css";
import { ChargerData } from "../../../app/models/connector";

interface Props {
  connectors: ChargerData[];
}
const ChargerTable: React.FC<Props> = ({ connectors }) => {
  return (
    <div className="charger-table">
      <div className="line-item-divider"></div>
      <h2 className="table-title">Charger #{1}</h2>
      {connectors.map((connector) => (
        <Connector key={connector.id} connector={connector} />
      ))}
    </div>
  );
};

export default ChargerTable;
