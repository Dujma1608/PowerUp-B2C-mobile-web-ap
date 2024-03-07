import * as Yup from "yup";

export const invoiceValidation = Yup.object({
  email: Yup.string()
    .email()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Email is not valid"
    ),
});

export const loginValidation = Yup.object({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const passwordValidation = Yup.object({
  newPassword: Yup.string().min(6, "Password must be at least 6 characters"),
  newPasswordRepeated: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

export const cardValidation = Yup.object({
  cardNumber: Yup.string()
    .transform((value, originalValue) =>
      value ? value.replace(/\s/g, "") : value
    ) // Remove spaces
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiration date")
    .test("expiryDate", "Card is expired", function (value) {
      if (!value) return false;

      const [expiryMonth, expiryYear] = value.split("/");
      const parsedExpiryMonth = parseInt(expiryMonth, 10);
      const parsedExpiryYear = parseInt(expiryYear, 10) + 2000; // assuming two-digit year representation

      // Check if the expiry date is in the future
      if (
        parsedExpiryYear < currentYear ||
        (parsedExpiryYear === currentYear && parsedExpiryMonth < currentMonth)
      ) {
        return false; // Card is expired
      }
      return true;
    })
    .required("Expiration date is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});

export const registerValidation = Yup.object().shape({
  firstName: Yup.string().nullable(),
  lastName: Yup.string().nullable(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
