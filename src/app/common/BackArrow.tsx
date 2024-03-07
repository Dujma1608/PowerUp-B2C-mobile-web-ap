import { IonButton, IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import "./BackArrow.css";

interface Props {
  setClose: () => void;
  isWhite?: true;
}

const BackArrow: React.FC<Props> = ({ setClose, isWhite }) => {
  return (
    <div
      className={isWhite ? "back-button white-color" : "back-button"}
      slot="start"
      onClick={() => setClose()}
    >
      <IonIcon icon={arrowBackOutline} style={{ fontSize: "24px" }} />
    </div>
  );
};

export default BackArrow;
