import { IonContent, IonPage } from "@ionic/react";
import BackArrow from "../../../app/common/BackArrow";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import "./T&C.css";
import cards from "../../../assets/images/Cards/cards-data.png";

const DataProtection: React.FC = () => {
  const history = useHistory();

  const [dataProtection, setDataProtection] = useState<string>("");

  useEffect(() => {
    const fetchDataProtection = async () => {
      try {
        const response = await fetch("/dataProtection.txt");
        if (!response.ok) {
          throw new Error("Failed to fetch terms and conditions");
        }
        const text = await response.text();
        setDataProtection(text);
      } catch (error) {
        console.error("Error fetching terms and conditions:", error);
      }
    };

    fetchDataProtection();
  }, []);

  const handleBack = () => {
    history.goBack();
  };
  const renderText = () => {
    return dataProtection.split("\n").map((line, index) => {
      if (
        line.startsWith(
          "The following cards are accepted for product/service payments on the Power Up system:"
        )
      ) {
        return (
          <div key={index}>
            <p
              className="tekst"
              style={{ textAlign: "center", marginBottom: "10px" }}
            >
              {line}
            </p>
            <img
              style={{ margin: "5px 0", width: "68vw", height: "32px" }}
              src={cards}
              alt="Card Types"
            />
          </div>
        );
      } else if (line.startsWith("Title:")) {
        return (
          <p className="odredbe" key={index} style={{ textAlign: "center" }}>
            {line.replace("Title:", "")}
          </p>
        );
      } else if (line.startsWith("Subtitle:")) {
        return (
          <p className="clanak" key={index} style={{ textAlign: "center" }}>
            {line.replace("Subtitle:", "")}
          </p>
        );
      } else if (line.startsWith("Super-subtitle:")) {
        return (
          <p
            className="super-subtitle"
            key={index}
            style={{ textAlign: "center" }}
          >
            {line.replace("Super-subtitle:", "")}
          </p>
        );
      } else if (line.startsWith("Super:")) {
        return (
          <p className="super" key={index}>
            {line.replace("Super:", "")}
          </p>
        );
      } else if (line.startsWith("Super2:")) {
        return (
          <p className="super2" key={index}>
            {line.replace("Super2:", "")}
          </p>
        );
      } else {
        return (
          <p className="tekst" key={index}>
            {line}
          </p>
        );
      }
    });
  };

  return (
    <IonPage style={{ padding: "30px 15px" }}>
      <div style={{ marginBottom: "20px" }}>
        <BackArrow setClose={handleBack} />
      </div>
      <h3 className="font18 w600 color021" style={{ padding: "0px 15px" }}>
        Data Protection
      </h3>
      <IonContent className="ion-padding">
        <div
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
          }}
        >
          {renderText()}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DataProtection;
