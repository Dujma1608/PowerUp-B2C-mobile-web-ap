import Connector from "./Connector";
import "./ChargerTable.css";

const ChargerTable: React.FC = () => {
  return (
    <div className="charger-table">
      <div className="line-item-divider"></div>
      <h2 className="table-title">Charger #{2}</h2>
      <div>
        <Connector />
        <Connector />
        <Connector />
      </div>
    </div>
  );
};

export default ChargerTable;
