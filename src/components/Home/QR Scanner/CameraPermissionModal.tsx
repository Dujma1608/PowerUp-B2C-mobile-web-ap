import { IonButton, IonModal } from "@ionic/react";
import { useRef } from "react";
import { useHistory } from "react-router";
import QRCodeScanner from "./QRCodeScanner";

interface Props {
  title: string;
  subtitle: string;
  confirmButtonText: string;
  denyButtonText: string;
  isOpen: boolean;
  setShowModal: (value: boolean) => void;
  allowCamera: () => void;
}
const CameraPermissionModal: React.FC<Props> = ({
  title,
  subtitle,
  confirmButtonText,
  denyButtonText,
  isOpen,
  setShowModal,
  allowCamera,
}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const history = useHistory();

  function dismiss() {
    modal.current?.dismiss();
    history.goBack();
    setShowModal(false);
  }

  const handleClick = () => {
    allowCamera();
  };
  return (
    <IonModal
      backdropDismiss={false}
      ref={modal}
      isOpen={isOpen}
      initialBreakpoint={0.33}
      className="sure-modal"
    >
      <div className="sure-container">
        <div className="header-item">
          <p className="font16 w600">{title}</p>
        </div>
        <div>
          <p className="font12 w400 colorA6">{subtitle}</p>
        </div>
        <div className="sure-button-container">
          <IonButton className="login-button w600 font12" onClick={handleClick}>
            {confirmButtonText}
          </IonButton>
          <IonButton
            id="open-modal"
            className="delete w600 font12"
            onClick={() => dismiss()}
          >
            {denyButtonText}
          </IonButton>
        </div>
      </div>
    </IonModal>
  );
};
export default CameraPermissionModal;
