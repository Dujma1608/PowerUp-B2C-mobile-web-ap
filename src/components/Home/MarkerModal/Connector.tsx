import "./Connector.css";

const Connector: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-column">
        <p className="title">Connector#1:CCS2</p>
        <p className="availability w400">EUR 0,50/kWh</p>
      </div>
      <div className="flex-column">
        <div className="flex-little">
          <p className="title w700">DC</p>
          <p className="availability w400 marginzero">Occupied</p>
        </div>
        <p className="availability">Max Power: 300kW</p>
      </div>
    </div>
  );
};

export default Connector;
