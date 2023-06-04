import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import PropTypes from 'prop-types';


const ProtectedRouteElement = ({ element, to }) => {
  const accessToken = getCookie("accessToken");
  const userData = useSelector((state) => state.authStore.user);

  return (userData && accessToken) ? element : <Navigate to={to} replace />;
};

export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
  element: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired
}
