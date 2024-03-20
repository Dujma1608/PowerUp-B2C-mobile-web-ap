import { QRConnector } from "../../../app/models/connector";

interface Props {
  name: string;
  connector: QRConnector | null;
}

const WebConfirmInfoItem: React.FC<Props> = ({ connector, name }) => {
  return (
    <div className="flex">
      <p className="category">{name}</p>
      <p className="font14 w500">{connector?.connectorType}</p>
    </div>
  );
};

export default WebConfirmInfoItem;
