import Connector from "./Connector";
import "./ChargerTable.css";
import { ChargerData } from "../../../app/models/connector";
import { useEffect } from "react";

interface Props {
  connectors: ChargerData[];
  connectorStatus: string[];
}
const ChargerTable: React.FC<Props> = ({ connectors, connectorStatus }) => {
  return (
    <div className="charger-table">
      <div className="line-item-divider"></div>
      <h2 className="table-title">Charger #{1}</h2>
      {connectors.map((connector, index) => (
        <Connector
          key={connector.id}
          connector={connector}
          status={connectorStatus[index] || "Unavailable"}
        />
      ))}
    </div>
  );
};

export default ChargerTable;
