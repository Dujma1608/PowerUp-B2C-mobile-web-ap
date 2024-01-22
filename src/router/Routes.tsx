// appRoutes.tsx

import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Onboarding from "../pages/Onboarding/Onboarding";
import Login from "../pages/Login/Login";

const Routes: React.FC = () => (
  <>
    <Route path="/" component={Onboarding} exact={true} />
    <Route path="/login" component={Login} exact={true} />
    <Route path="/home" component={Home} exact={true} />
  </>
);

export default Routes;
