import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./SelectCountryDropdown.css";
import { IonText } from "@ionic/react";
import { useField, useFormikContext } from "formik";

interface Props {
  isTouched: boolean;
  setIsTouched: (e: boolean) => void;
  isClickedSelect: boolean;
  selectValue: string;
  setSelectValue: (e: string) => void;
}
const SelectCountryDropdown: React.FC<Props> = ({
  isTouched,
  setIsTouched,
  isClickedSelect,
  selectValue,
  setSelectValue,
}) => {
  const handleSelectChange = (code: string) => {
    setSelectValue(code);
  };

  const handleClick = () => {
    setIsTouched(true);
  };
  return (
    <div>
      <label
        style={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      >
        Country
      </label>
      <div onClick={handleClick}>
        <ReactFlagsSelect
          selected={selectValue}
          onSelect={handleSelectChange}
          placeholder="Select country"
          searchable
          searchPlaceholder="Search country"
          selectedSize={12}
          optionsSize={14}
          className="menu-flags"
          selectButtonClassName="menu-flags-button"
        />
      </div>
      <div className="error-message">
        {isClickedSelect && isTouched && selectValue === "" ? (
          <IonText className="validator-message" style={{ color: "red" }}>
            Country is required
          </IonText>
        ) : null}
      </div>
    </div>
  );
};

export default SelectCountryDropdown;
