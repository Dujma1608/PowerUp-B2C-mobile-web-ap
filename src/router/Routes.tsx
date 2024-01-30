// appRoutes.tsx

import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "../pages/Onboarding/Onboarding";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/Login/ForgotPassword";
import NewPassword from "../pages/Login/NewPassword";
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AUTO GENERATED BY CONFLICT EXTENSION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< main
import Home from "../pages/Home/Home";
====================================AUTO GENERATED BY CONFLICT EXTENSION====================================
import PasswordReset from "../pages/Login/PasswordReset";
// import Home from "../pages/Home/Home";
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>AUTO GENERATED BY CONFLICT EXTENSION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> feature/login

const Routes: React.FC = () => (
  <>
    <Route path="/" component={Onboarding} exact={true} />
    <Route path="/login" component={Login} exact={true} />
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AUTO GENERATED BY CONFLICT EXTENSION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< main
    <Route path="/login/forgot-password" component={ForgotPassword} />
    <Route path="/login/reset-password" component={NewPassword} />
    <Route path="/home" component={Home} exact={true} />
====================================AUTO GENERATED BY CONFLICT EXTENSION====================================
    <Route path="/login/password-reset" component={PasswordReset} />
    {/* <Route path="/home" component={Home} exact={true} /> */}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>AUTO GENERATED BY CONFLICT EXTENSION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> feature/login
    <Route path="/register" component={Register} exact={true} />
  </>
);

export default Routes;
