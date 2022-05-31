import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuth } from "app/login/context/authContext";

import { AppRoute } from "./AppRoute.enum";

type Props = RouteProps & {
  routeType?: "guest" | "protected";
};

const AuthRoute = ({ routeType, ...props }: Props) => {
  const { isAuthenticated } = useAuth();

  if (routeType === "guest" && isAuthenticated())
    return <Redirect to={AppRoute.Home} />;
  return <Route {...props} />;
};

export default AuthRoute;
