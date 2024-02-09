// appRoutes.tsx

import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "../pages/Onboarding/Onboarding";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/Login/ForgotPassword";
import NewPassword from "../pages/Login/NewPassword";
import Home from "../pages/Home/Home";

import PasswordReset from "../pages/Login/PasswordReset";
import BarcodePage from "../components/Home/QR Scanner/BarcodePage";
import Connecting from "../components/Charging/Connecting";
import ChargingScreen from "../components/ChargingActive/ChargingScreen";
import ProcessingPayment from "../components/ChargingActive/ProccesingPayment";
import Profile from "../pages/Profile/Profile";
import AccountInfo from "../pages/Profile/Info/AccountInfo/AccountInfo";
import ChangePassword from "../pages/Profile/Info/PasswordChange/ChangePassword";
import BasicInfo from "../pages/Profile/Info/BasicInfo/BasicInfo";
import Email from "../pages/Profile/Info/BasicInfo/Email";
import PaymentMethods from "../pages/Profile/PaymentMethods/PaymentMethods";
import Card from "../pages/Profile/PaymentMethods/Detail/Card";
// import Home from "../pages/Home/Home";

const Routes: React.FC = () => (
  <>
    <Route path="/" component={Onboarding} exact={true} />
    <Route path="/login" component={Login} exact={true} />
    <Route path="/camera" component={BarcodePage} exact={true} />
    <Route path="/login/password-reset" component={PasswordReset} />
    <Route path="/home" component={Home} exact={true} />
    <Route path="/connecting" component={Connecting} exact={true} />
    <Route path="/charging" component={ChargingScreen} exact={true} />
    <Route
      path="/charging/process"
      component={ProcessingPayment}
      exact={false}
    />
    <Route path="/register" component={Register} exact={true} />
    <Route path="/profile" component={Profile} exact={true} />
    <Route path="/profile/account" component={AccountInfo} exact={true} />
    <Route path="/profile/account/info" component={BasicInfo} exact={true} />
    <Route path="/profile/account/email" component={Email} exact={true} />
    <Route
      path="/profile/account/password"
      component={ChangePassword}
      exact={true}
    />
    <Route path="/profile/payment" component={PaymentMethods} exact={true} />
    <Route path="/profile/payment/:id" component={Card} exact={true} />
  </>
);

export default Routes;
