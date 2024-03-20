import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "../../pages/Onboarding/Onboarding";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PasswordReset from "../../pages/Login/PasswordReset";
import BarcodePage from "../../components/Home/QR Scanner/BarcodePage";
import Connecting from "../../components/Charging/Connecting";
import ProcessingPayment from "../../components/ChargingActive/ProccesingPayment";
import AccountInfo from "../../pages/Profile/Info/AccountInfo/AccountInfo";
import ChangePassword from "../../pages/Profile/Info/PasswordChange/ChangePassword";
import BasicInfo from "../../pages/Profile/Info/BasicInfo/BasicInfo";
import PaymentMethods from "../../pages/Profile/PaymentMethods/PaymentMethods";
import Card from "../../pages/Profile/PaymentMethods/Detail/Card";
import PaymentHistory from "../../pages/Profile/PaymentHistory/PaymentHistory";
import InfoPage from "../../pages/Profile/T&C/InfoPage";
import TermsAndConditions from "../../pages/Profile/T&C/TermsAndCondition";
import DataProtection from "../../pages/Profile/T&C/DataProtection";
import TabDefault from "../common/tabbar/TabDefault";
import { Capacitor } from "@capacitor/core";
import VerifyUser from "../../components/RegisterForm/VerifyUser";
import Initial from "../../WebApp/Pages/Initial/Initial";
import ChargingScreen from "../../components/ChargingActive/ChargingScreen";
import NotConnected from "../../components/Charging/NotConnected";
import WebChargingScreen from "../../WebApp/Pages/active/WebChargingScreen";
import ConfirmInfoWeb from "../../WebApp/Pages/info/ConfirmInfoWeb";

const mobileRoutes = [
  { path: "/", component: Onboarding, exact: true },
  { path: "/login", component: Login, exact: true },
  { path: "/camera", component: BarcodePage, exact: true },
  { path: "/login/password-reset", component: PasswordReset },
  { path: "/app", component: TabDefault },
  { path: "/connecting", component: Connecting, exact: true },
  { path: "/not-connected", component: NotConnected, exact: true },
  { path: "/charging", component: ChargingScreen, exact: true },
  { path: "/charging/process", component: ProcessingPayment },
  { path: "/register", component: Register, exact: true },
  { path: "/register/verify", component: VerifyUser, exact: true },
  { path: "/profile/account", component: AccountInfo, exact: true },
  { path: "/profile/account/info", component: BasicInfo, exact: true },
  { path: "/profile/account/password", component: ChangePassword, exact: true },
  { path: "/profile/payment", component: PaymentMethods, exact: true },
  { path: "/profile/payment/:id", component: Card, exact: true },
  { path: "/profile/payment-history", component: PaymentHistory, exact: true },
  { path: "/profile/info", component: InfoPage, exact: true },
  {
    path: "/profile/info/terms&conditions",
    component: TermsAndConditions,
    exact: true,
  },
  {
    path: "/profile/info/data-protection",
    component: DataProtection,
    exact: true,
  },
];
const webRoutes = [
  {
    path: "/terms",
    component: TermsAndConditions,
    exact: true,
  },
  {
    path: "/confirm-info/:qr",
    component: ConfirmInfoWeb,
    exact: true,
  },
  { path: "/connecting", component: Connecting, exact: true },
  { path: "/not-connected", component: NotConnected, exact: true },
  { path: "/charging", component: WebChargingScreen, exact: true },
  { path: "/charging/process", component: ProcessingPayment },
  { path: "/:qr", component: Initial, exact: true },
];

const Routes: React.FC = () => {
  let routes = [];

  if (Capacitor.getPlatform() == "web") {
    routes = webRoutes;
  } else routes = mobileRoutes;
  return (
    <>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </>
  );
};

export default Routes;
