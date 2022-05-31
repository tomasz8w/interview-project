import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Login } from "app/login/Login";
import { Products } from "app/products/Products";
import { ProductSearchContextProvider } from "app/products/context/searchContext";

import { AppRoute } from "./AppRoute.enum";
import AuthRoute from "./AuthRoute";

const withContext = (Context: React.FC) => (Component: React.FC) =>
  (
    <Context>
      <Component />
    </Context>
  );

export const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path={AppRoute.Home}
        exact
        component={() => withContext(ProductSearchContextProvider)(Products)}
      />
      <AuthRoute routeType="guest" path={AppRoute.Login} component={Login} />

      <Redirect to={AppRoute.Home} />
    </Switch>
  );
};
