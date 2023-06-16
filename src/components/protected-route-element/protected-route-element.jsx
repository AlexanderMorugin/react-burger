import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRouteElement = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useSelector((store) => store.authStore.isAuthChecked);
  const user = useSelector((store) => store.authStore.user);
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

ProtectedRouteElement.propTypes = {
  onlyUnAuth: PropTypes.bool,
  component: PropTypes.element.isRequired,
};
