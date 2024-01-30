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
// import Home from "../pages/Home/Home";

const Routes: React.FC = () => (
  <>
    <Route path="/" component={Onboarding} exact={true} />
    <Route path="/login" component={Login} exact={true} />
    <Route path="/login/password-reset" component={PasswordReset} />
    <Route path="/home" component={Home} exact={true} />
    <Route path="/register" component={Register} exact={true} />
  </>
);

export default Routes;
