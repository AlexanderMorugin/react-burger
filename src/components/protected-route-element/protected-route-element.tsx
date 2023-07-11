import { Navigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../services/hooks";
import { FC } from "react";
import { loginUrl } from "../../utils/constants";

interface IProtectedRouteElement {
  component: any;
  onlyUnAuth?: boolean;
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ onlyUnAuth = false, component }) => {
  const { isAuthChecked } = useTypedSelector(state => state.authStore);
  const { user } = useTypedSelector(state => state.authStore);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to={loginUrl} state={{ from: location }} />;
  }

  return component;
};
