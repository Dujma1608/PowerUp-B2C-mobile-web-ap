import { Formik } from "formik";
import EmailForm from "../../../components/ChargingActive/Invoice/EmailForm";
import mastercard from "../../../assets/images/Cards/mastercard.png";
import { IonImg } from "@ionic/react";

const WebChargingBillFooter: React.FC = () => {
  const cardNo = "2234756492308463";
  const email = "mate.matic@gmail.com";
  const maskedCardNo =
    "•".repeat(4) + " " + cardNo.substring(cardNo.length - 4, cardNo.length);
  return (
    <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
      {({ handleChange, isValid, dirty, isSubmitting, values }) => (
        <div className="web-footer-bill-container">
          <div className="web-card-bill-flex">
            <IonImg
              style={{
                width: "42px",
                height: "24px",
                marginRight: "10px",
              }}
              src={mastercard}
            />
            <p className="font12 w500">{maskedCardNo}</p>
          </div>
          <EmailForm />
        </div>
      )}
    </Formik>
  );
};

export default WebChargingBillFooter;
