import { IonButton, IonIcon, IonInput, IonLabel, IonText } from "@ionic/react";
import { useField } from "formik";
import React, { useState } from "react";
import "../../app/common/form/MyTextInput.css";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";

interface Props {
  placeholder: string;
  name: string;
  type?: "password" | "email" | "number";
  showPasswordToggle?: boolean;
  handleChange: (e: any) => void;
  isLogin?: boolean;
  inputDisabled?: true;
}

const LoginTextInput: React.FC<Props> = ({
  placeholder,
  name,
  type,
  showPasswordToggle = true,
  handleChange,
  isLogin,
  inputDisabled,
}) => {
  const [field, meta, helpers] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleBlur = () => {
    // Explicitly call handleBlur when the button is clicked
    helpers.setTouched(true);
  };

  return (
    <div className="input">
      <IonInput
        disabled={inputDisabled}
        id="loginInput"
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        {...field}
        onIonInput={handleChange}
        className={!isLogin ? "input-login" : "profile-input"}
      >
        {type === "password" && showPasswordToggle && (
          <>
            <input
              type="hidden"
              onBlur={() => helpers.setTouched(true)}
              id={name}
              name={name}
              tabIndex={-1}
            />
            <IonButton
              id="show/hide"
              fill="clear"
              onClick={(e) => {
                togglePasswordVisibility();
                handleBlur(); // Call handleBlur when the button is clicked
              }}
              className="password-toggle-button"
              aria-label="Show/hide"
              slot="end"
            >
              <IonIcon
                icon={showPassword ? eyeOutline : eyeOffOutline}
                aria-hidden="true"
              />
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

export default LoginTextInput;
