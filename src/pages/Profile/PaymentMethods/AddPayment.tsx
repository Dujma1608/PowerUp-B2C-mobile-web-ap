import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonPage,
  IonSelect,
  IonSelectOption,
  useIonViewDidEnter,
} from "@ionic/react";
import { Form, Formik } from "formik";
import { cardValidation } from "../../../components/FormUtils/Validation";
import { arrowBackOutline, card } from "ionicons/icons";
import { useEffect, useRef } from "react";
import "./AddPayment.css";
import croatia from "../../../assets/images/flag.png";
import PaymentInput from "./PaymentInput";
import { h } from "ionicons/dist/types/stencil-public-runtime";
import CardNumberInput from "./CardNumberInput";
import BackArrow from "../BackArrow";

interface Props {
  isOpen: boolean;
  setClose: () => void;
}

const AddPayment: React.FC<Props> = ({ isOpen, setClose }) => {
  const cardTypes = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
  };

  const initialValues = {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };
  const handleBack = (e: any) => {
    e.preventDefault();
    setClose();
  };

  return (
    <IonModal isOpen={isOpen} onWillDismiss={setClose}>
      <IonPage style={{ padding: "30px 15px" }}>
        <BackArrow setClose={setClose} />
        <IonContent className="ion-padding">
          <p className="font20 w600 color021 marginBottom">
            Add payment method
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={cardValidation}
            onSubmit={() => {}}
          >
            {({ handleChange, isValid, dirty }) => (
              <Form>
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
                <div>
                  <label style={{ fontSize: "12px", fontWeight: "600" }}>
                    Country
                  </label>
                  <select disabled className="custom-select" value="croatia">
                    <option value="croatia">Croatia</option>
                  </select>
                </div>
                <IonButton
                  className={
                    !isValid || !dirty ? "update-disabled" : "update-button"
                  }
                  disabled={!isValid || !dirty}
                >
                  Update
                </IonButton>
              </Form>
            )}
          </Formik>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};

export default AddPayment;
