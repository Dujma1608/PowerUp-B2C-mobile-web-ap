import { IonIcon, IonToast } from "@ionic/react";
import "./Alert.css";
import { checkmarkOutline, closeOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

interface Props {
  error: boolean;
}
const Alert: React.FC<Props> = ({ error }) => {
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");

  const Success = {
    header: "Successful!",
    text: " Your invoice has been successfully sent to your email.",
  };
  const Error = {
    header: "Error",
    text: "Something went wrong. We will send you an invoice by email as soon as issue gets resolved.",
  };

  useEffect(() => {
    if (error) {
      setHeader(Error.header);
      setText(Error.text);
    } else {
      setHeader(Success.header);
      setText(Success.text);
    }
  }, []);

  return (
    <div className="email-toast">
      <div className="toast-flex">
        {error ? (
          <IonIcon
            icon={closeOutline}
            style={{ fontSize: "24px", color: "#EA574B" }}
          />
        ) : (
          <IonIcon
            icon={checkmarkOutline}
            style={{ fontSize: "24px", color: "#3ACE7A" }}
          />
        )}
        <p className="font20 w600 color000">{header}</p>
      </div>
      <div>
        <p className="font12 w400 colorA6">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
