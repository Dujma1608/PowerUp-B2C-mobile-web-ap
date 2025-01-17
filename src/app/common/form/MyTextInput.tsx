import { IonButton, IonIcon, IonInput, IonLabel, IonText } from "@ionic/react";
import { Field, useField } from "formik";
import React, { useEffect, useState } from "react";
import "./MyTextInput.css";
import { eyeOffOutline, eyeOutline, checkmarkSharp } from "ionicons/icons";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: "text" | "password" | "email";
  showGreenTick?: boolean;
  isEmail?: true;
  error?: boolean;
  isDisabled?: boolean;
  errors?: any;
  handleChange: (e: any) => void;
}

const MyTextInput: React.FC<Props> = ({
  placeholder,
  name,
  label,
  type,
  showGreenTick,
  handleChange,
  error,
  errors,
  isDisabled,
  isEmail,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="input">
      <IonLabel>{label}</IonLabel>
      <IonInput
        style={isDisabled ? { opacity: "0.6" } : {}}
        type={type}
        placeholder={placeholder}
        {...field}
        onIonInput={handleChange}
        className={`input-login ${isDisabled ? "disabled-input" : ""}`}
        disabled={isDisabled}
      >
        <IonButton
          fill="clear"
          disabled={true}
          style={{
            margin: 0,
            padding: 0,
            border: "none",
            background: "none",
          }}
          slot="end"
        >
          {showGreenTick && !meta.error ? (
            <IonIcon
              style={{ color: "#0AB051", fontSize: "24px" }}
              icon={checkmarkSharp}
              slot="end"
            />
          ) : null}
        </IonButton>
      </IonInput>
      {isEmail ? (
        <div className="error-message">
          {meta.touched && meta.error ? (
            <IonText className="validator-message">{meta.error}</IonText>
          ) : (
            <IonText className="validator-message">{errors.error}</IonText>
          )}
        </div>
      ) : (
        <div className="error-message">
          {meta.touched && meta.error ? (
            <IonText className="validator-message">{meta.error}</IonText>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default MyTextInput;
