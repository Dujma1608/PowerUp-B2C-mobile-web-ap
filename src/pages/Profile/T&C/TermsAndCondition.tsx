import { IonContent, IonPage } from "@ionic/react";
import BackArrow from "../../../app/common/BackArrow";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import "./T&C.css";
import AboutUs from "./AboutUs";

const TermsAndConditions: React.FC = () => {
  const history = useHistory();

  const [termsAndConditions, setTermsAndConditions] = useState<string>("");

  useEffect(() => {
    const fetchTermsAndConditions = async () => {
      try {
        const response = await fetch("/termsAndConditions.txt");
        if (!response.ok) {
          throw new Error("Failed to fetch terms and conditions");
        }
        const text = await response.text();
        setTermsAndConditions(text);
      } catch (error) {
        console.error("Error fetching terms and conditions:", error);
      }
    };

    fetchTermsAndConditions();
  }, []);

  const handleBack = () => {
    history.goBack();
  };
  const renderText = () => {
    return termsAndConditions.split("\n").map((line, index) => {
      if (line.startsWith("Title:")) {
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
    <IonPage style={{ padding: "35px 15px" }}>
      <div style={{ marginBottom: "40px" }}>
        <BackArrow setClose={handleBack} />
      </div>
      <h3
        className="font18 w600 color021"
        style={{ padding: "0px 15px", marginBottom: "20px" }}
      >
        Terms & Conditions
      </h3>
      <IonContent className="ion-padding">
        <div
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
          }}
        >
          <AboutUs />
          {renderText()}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TermsAndConditions;
