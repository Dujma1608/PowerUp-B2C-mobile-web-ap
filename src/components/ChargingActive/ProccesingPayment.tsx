import { IonContent, IonModal, IonPage, IonSpinner } from "@ionic/react";
import "../Charging/Connecting.css";
import { useEffect } from "react";
import { useHistory } from "react-router";

const ProcessingPayment: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      history.push("/home"); // Change '/another-page' to the path of your destination page
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the timeout is reached
  }, [history]);
  return (
    <IonPage>
      <IonContent>
        <div className="flex-column">
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
};

export default ProcessingPayment;
