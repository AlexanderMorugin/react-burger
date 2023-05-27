import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { useEffect } from "react";
import { getUserAction } from "../../services/actions/auth-actions";
import PropTypes from 'prop-types';


const ProtectedRouteElement = ({ element, to }) => {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");
  const userData = useSelector((state) => state.authStore.user);
  // const token = true;
  // const userData = true;
  // const token = false;
  // const userData = false;

  // useEffect(() => {
  //   if (!userData) {
  //     dispatch(getUserAction(userData));
  //   }
  // }, [dispatch, userData]);

  return (userData && accessToken) ? element : <Navigate to={to} replace />;
};

export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
  element: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired
}
