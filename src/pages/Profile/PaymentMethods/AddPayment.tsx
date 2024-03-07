import {
  IonButton,
  IonContent,
  IonFooter,
  IonModal,
  IonPage,
} from "@ionic/react";
import { Form, Formik } from "formik";
import { cardValidation } from "../../../components/FormUtils/Validation";
import "./AddPayment.css";
import PaymentInput from "./PaymentInput";
import CardNumberInput from "./CardNumberInput";
import BackArrow from "../../../app/common/BackArrow";
import { useEffect, useState } from "react";
import { Keyboard } from "@capacitor/keyboard";
import { Capacitor } from "@capacitor/core";
import SelectCountryDropdown from "../../../components/Profile/SelectCountryDropdown";

interface Props {
  isOpen: boolean;
  setClose: () => void;
}

const AddPayment: React.FC<Props> = ({ isOpen, setClose }) => {
  const [isClickedSelect, setIsClickedSelect] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [isSelectTouched, setIsSelectTouched] = useState(false);
  const [selectNoError, setSelectNoError] = useState(false);

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // useEffect(() => {
  //   // Check if running in Capacitor environment
  //   if (Capacitor.getPlatform() !== "web") {
  //     const showHandler = Keyboard.addListener("keyboardDidShow", async () =>
  //       setIsKeyboardVisible(true)
  //     );
  //     const hideHandler = Keyboard.addListener("keyboardDidHide", async () =>
  //       setIsKeyboardVisible(false)
  //     );

  //     return () => {
  //       showHandler.remove();
  //       hideHandler.remove();
  //     };
  //   }
  // }, []);

  useEffect(() => {
    if (selectValue !== "") {
      setSelectNoError(true);
    }
  }, [selectValue]);

  const initialValues = {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };
  const handleBack = () => {
    setClose();
    setSelectValue("");
    setIsClickedSelect(false);
    setIsSelectTouched(false);
  };

  return (
    <IonModal isOpen={isOpen} onIonModalDidDismiss={handleBack}>
      <IonPage
        style={{ padding: "30px 15px" }}
        onClick={() => setIsClickedSelect(true)}
      >
        <div style={{ marginBottom: "20px" }}>
          <BackArrow setClose={setClose} />
        </div>

        <IonContent className="ion-padding">
          <p className="font20 w600 color021" style={{ marginBottom: "35px" }}>
            Add payment method
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={cardValidation}
            onSubmit={() => {}}
          >
            {({ handleChange, isValid, dirty }) => (
              <Form>
                <div>
                  <CardNumberInput
                    placeholder="0000 0000 0000 0000"
                    name="cardNumber"
                    handleChange={handleChange}
                    label="Card Number"
                  />
                  <div className="flex-payment">
                    <div className="input-width">
                      <PaymentInput
                        placeholder="MM/GG"
                        name="expiryDate"
                        handleChange={handleChange}
                        label="Expiry Date"
                        isDate
                      />
                    </div>
                    <div className="input-width">
                      <PaymentInput
                        name="cvv"
                        placeholder="123"
                        handleChange={handleChange}
                        label="CVV"
                        isCVV
                      />
                    </div>
                  </div>
                  <SelectCountryDropdown
                    isTouched={isSelectTouched}
                    setIsTouched={setIsSelectTouched}
                    isClickedSelect={isClickedSelect}
                    selectValue={selectValue}
                    setSelectValue={setSelectValue}
                  />
                  <div
                    className={
                      isKeyboardVisible ? "keyboard-visible" : "keyboard-hidden"
                    }
                  >
                    <IonButton
                      className={
                        !isValid || !dirty || !selectNoError
                          ? "payment-update-disabled"
                          : "payment-update-button"
                      }
                      disabled={!isValid || !dirty || !selectNoError}
                    >
                      Add payment method
                    </IonButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};

export default AddPayment;
