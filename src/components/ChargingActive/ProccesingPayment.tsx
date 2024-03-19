import { IonContent, IonModal, IonPage, IonSpinner } from "@ionic/react";
import "../Charging/Connecting.css";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";

const ProcessingPayment: React.FC = observer(() => {
  const history = useHistory();
  const { regularStore, sessionStore } = useStore();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (regularStore.isWeb) {
        history.push("/charging");
        regularStore.setPaymentFinished(true);
      } else {
        sessionStore.closeConnection();
        history.push("/app/home");
        regularStore.setPaymentFinished(true);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [history]);
  return (
    <IonPage>
      <IonContent>
        <div className="connecting-flex-column">
          <div className="text-flex">
            <h1 className="font24 color021 w600">Payment in progress</h1>
            <p className="subtitle w400">
              Please don't close the app, it could take up to 20 seconds to
              process payment
            </p>
          </div>
          <div className="spinner">
            <IonSpinner
              style={{ color: "#D9D9D9" }}
              name="circles"
            ></IonSpinner>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
});

export default ProcessingPayment;
