import { IonContent, IonPage, IonSpinner } from "@ionic/react";
import "./Connecting.css";
import Connect from "../../assets/images/Charge0.png";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Connecting: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      history.push("/charging"); // Change '/another-page' to the path of your destination page
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the timeout is reached
  }, [history]);
  return (
    <IonPage>
      <IonContent>
        <div className="flex-column">
          <div className="text-flex">
            <h1 className="title-header w600">Connecting</h1>
            <p className="subtitle w400">
              Please wait, it could take up to 20 seconds for charging to start
            </p>
          </div>
          <div>
            <img src={Connect} className="connect-img" />
          </div>
          <div className="spinner">
            <IonSpinner
              style={{ color: "#0AB051" }}
              name="circles"
            ></IonSpinner>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Connecting;
