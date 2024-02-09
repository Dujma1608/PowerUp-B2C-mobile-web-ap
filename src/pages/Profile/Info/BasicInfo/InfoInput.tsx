import { IonButton, IonIcon, IonInput, IonLabel, IonText } from "@ionic/react";
import { useField } from "formik";
import React, { useState } from "react";
import { closeOutline, eyeOffOutline, eyeOutline } from "ionicons/icons";
import "./BasicInfo.css";

interface Props {
  placeholder: string;
  name: string;
  type: "text" | "email";
  showPasswordToggle?: boolean;
  handleChange: (e: any) => void;
}

const InfoInput: React.FC<Props> = ({
  placeholder,
  name,
  type,
  showPasswordToggle = true,
  handleChange,
}) => {
  const [field, meta, helpers] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    helpers.setValue("");
  };
  const handleBlur = () => {
    helpers.setTouched(true);
  };

  return (
    <div className="input">
      <IonInput
        className="basic-input"
        id="loginInput"
        placeholder={placeholder}
        {...field}
        onIonInput={handleChange}
      >
        {showPasswordToggle && (
          <>
            <input
              type="hidden"
              onBlur={() => helpers.setTouched(true)}
              id={name}
              name={name}
              tabIndex={-1}
            />
            <IonButton
              className="close-button"
              id="show/hide"
              fill="clear"
              onClick={(e) => {
                togglePasswordVisibility();
                handleBlur(); // Call handleBlur when the button is clicked
              }}
              aria-label="Show/hide"
              slot="end"
            >
              <IonIcon icon={closeOutline} style={{ color: "#021F0E" }} />
            </IonButton>
          </>
        )}
      </IonInput>
      <div className="error-message">
        {meta.touched && meta.error ? (
          <IonText className="validator-message">{meta.error}</IonText>
        ) : null}
      </div>
    </div>
  );
};

export default InfoInput;
