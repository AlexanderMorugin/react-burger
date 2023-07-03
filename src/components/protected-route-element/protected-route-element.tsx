import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FC } from "react";

interface IProtectedRouteElement {
  component: any;
  onlyUnAuth?: boolean;
}

interface IState {
  authStore: any
}

const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ onlyUnAuth = false, component }) => {
  const { isAuthChecked } = useSelector((state: IState) => state.authStore);
  const { user } = useSelector((state: IState) => state.authStore);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export default ProtectedRouteElement;
