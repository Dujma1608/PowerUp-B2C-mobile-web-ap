import { IonButton, IonIcon, IonImg } from "@ionic/react";
import { Formik } from "formik";
import { arrowForwardOutline } from "ionicons/icons";
import { invoiceValidation } from "../../FormUtils/Validation";
import "./EmailForm.css";

const EmailForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={() => {}}
      validationSchema={invoiceValidation}
    >
      {({ handleChange, isValid, dirty, isSubmitting, values }) => (
        <div className="web-footer-container">
          <p className="font10 w600 color021" style={{ marginTop: "15px" }}>
            Please enter your email to send an invoice
          </p>
          <div className="web-input-container">
            <input
              className="web-email-input"
              placeholder="example@gmail.com"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <IonButton
              disabled={!isValid || !dirty}
              type="submit"
              className={!isValid || !dirty ? "bill-btn disabled" : "bill-btn"}
            >
              <IonIcon
                className={
                  !isValid || !dirty ? "bill-arrow-disabled" : "bill-arrow"
                }
                style={{ fontSize: "20px" }}
                icon={arrowForwardOutline}
              />
            </IonButton>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EmailForm;
