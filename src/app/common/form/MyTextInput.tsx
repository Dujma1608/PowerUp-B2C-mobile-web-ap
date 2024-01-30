import { IonButton, IonIcon, IonInput, IonLabel, IonText } from "@ionic/react";
import { Field, useField } from "formik";
import React, { useState } from "react";
import "./MyTextInput.css";
import { eyeOffOutline, eyeOutline, checkmarkSharp } from "ionicons/icons";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  value: string;
  type?: "text" | "password" | "email";
  showGreenTick?: boolean;
  handleChange: (e: any) => void;
}

const MyTextInput: React.FC<Props> = ({
  placeholder,
  name,
  label,
  type,
  showGreenTick,
  value,
  handleChange,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="input">
      <IonLabel>{label}</IonLabel>
      <IonInput
        type={type}
        placeholder={placeholder}
        {...field}
        value={value}
        onIonChange={(e) => handleChange(e)}
        className="input-login"
      >
        {showGreenTick && meta.error && field.value && (
          <IonIcon
            style={{ color: "#0AB051", fontSize: "24px" }}
            icon={checkmarkSharp}
            slot="end"
          />
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

export default MyTextInput;
