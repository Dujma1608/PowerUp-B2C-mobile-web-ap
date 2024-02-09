import { IonButton, IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

interface Props {
  setClose: () => void;
}

const BackArrow: React.FC<Props> = ({ setClose }) => {
  return (
    <IonButton className="backButton" slot="start" onClick={() => setClose()}>
      <IonIcon
        icon={arrowBackOutline}
        style={{ color: "#000", fontSize: "24px" }}
      />
    </IonButton>
  );
};

export default BackArrow;
