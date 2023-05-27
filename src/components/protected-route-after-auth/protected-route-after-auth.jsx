import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { useEffect } from "react";
import { getUserAction } from "../../services/actions/auth-actions";
import PropTypes from 'prop-types';


// const ProtectedRouteAfterAuth = ({ element, to }) => {
//   // const dispatch = useDispatch();
//   // const token = getCookie("accessToken");
//   // const userData = useSelector((state) => state.authStore.user);

//   // useEffect(() => {
//   //   if (!userData) {
//   //     dispatch(getUserAction(userData));
//   //   }
//   // }, [dispatch, userData]);

//   // return (userData && token) ? element : <Navigate to={to} replace />;
//   return <Navigate to={to} replace />;
// };

const ProtectedRouteAfterAuth = ({ element }) => {
  const getUserSucces = useSelector((store) => store.authStore.getUserSucces);
  // const authError = useSelector((store) => store.authStore.authError);

  // if (!getUserSucces || authError === 'You should be authorized') {
  //   if (getUserSucces) {
  //   return <Navigate to={to} replace />;
  // }
  // return getUserSucces ? element : <Navigate to={to} replace />;

  if (getUserSucces) {
    return <Navigate to="/" replace={true} />
  }

  return element;

};

export default ProtectedRouteAfterAuth;

ProtectedRouteAfterAuth.propTypes = {
  element: PropTypes.object.isRequired,
  // to: PropTypes.string.isRequired
}
