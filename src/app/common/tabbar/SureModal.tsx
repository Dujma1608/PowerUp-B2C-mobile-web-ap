import { IonButton, IonModal } from "@ionic/react";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useHistory } from "react-router";
import { useStore } from "../../stores/store";

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
  isCharging?: true;
}
const SureModal: React.FC<Props> = observer(
  ({ title, subtitle, buttonText, isCharging }) => {
    const { regularStore } = useStore();
    const modal = useRef<HTMLIonModalElement>(null);
    const history = useHistory();

    function dismiss() {
      modal.current?.dismiss();
    }

    const handleClick = () => {
      if (isCharging) {
        regularStore.setIsCharging(false);
        history.push("/charging/process");
      } else console.log("Payment removed");
    };
    return (
      <IonModal
        backdropDismiss={false}
        ref={modal}
        trigger="open-sure-modal"
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
            <IonButton
              className="login-button w600 font12"
              onClick={handleClick}
            >
              {buttonText}
            </IonButton>
            <IonButton
              id="open-modal"
              className="delete w600 font12"
              onClick={() => dismiss()}
            >
              Cancel
            </IonButton>
          </div>
        </div>
      </IonModal>
    );
  }
);
export default SureModal;
