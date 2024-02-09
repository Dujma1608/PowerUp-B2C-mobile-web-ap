import {
  IonIcon,
  IonImg,
  IonInput,
  IonText,
  useIonViewDidEnter,
} from "@ionic/react";
import { useField } from "formik";
import { card } from "ionicons/icons";
import { useRef, useState } from "react";
import visaCard from "../../../assets/images/Cards/visa.png";
import mastercard from "../../../assets/images/Cards/mastercard.png";

interface Props {
  placeholder: string;
  name: string;
  handleChange: (e: any) => void;
  label: string;
}

const CardNumberInput: React.FC<Props> = ({
  placeholder,
  name,
  label,
  handleChange,
}) => {
  const [field, meta, helpers] = useField(name);
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [cardType, setCardType] = useState<string | null>(null);

  const handleCardNumberChange = (event: CustomEvent) => {
    let newValue = event.detail.value?.toString().replace(/[^0-9]/g, ""); // Remove non-numeric characters

    const cardTypes = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      amex: /^3[47]/,
      discover: /^6(?:011|5)/,
    };

    for (const [type, pattern] of Object.entries(cardTypes)) {
      if (pattern.test(newValue)) {
        setCardType(type); // Set the detected card type
        break;
      }
    }

    const formattedValue = newValue?.replace(/(.{4})/g, "$1 ").trim(); // Insert space after every 4 characters

    setFormattedValue(formattedValue || "");
    handleChange({ target: { name, value: newValue } });
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ fontSize: "12px", fontWeight: "600" }}>{label}</label>
      <IonInput
        maxlength={19}
        inputmode="numeric"
        className="payment-input"
        pattern="[0-9]*"
        style={{ paddingLeft: "10px" }}
        {...field}
        value={formattedValue}
        placeholder={placeholder}
        onIonInput={handleCardNumberChange}
        id="inputKey"
      >
        <div slot="start">
          {cardType ? (
            <IonImg
              src={
                cardType === "visa"
                  ? visaCard
                  : cardType === "mastercard"
                  ? mastercard
                  : undefined
              }
              slot="start"
              style={{ width: "42px", height: "24px", marginLeft: "8px" }}
            />
          ) : (
            <IonIcon
              icon={card}
              slot="start"
              style={{
                color: "#A6A6A6",
                fontSize: "28px",
                paddingLeft: "8px",
              }}
            />
          )}
        </div>
      </IonInput>

      <div className="error-message">
        {meta.touched && meta.error ? (
          <IonText className="validator-message">{meta.error}</IonText>
        ) : null}
      </div>
    </div>
  );
};

export default CardNumberInput;
