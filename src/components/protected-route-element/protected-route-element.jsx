import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { useEffect } from "react";
import { getUserAction } from "../../services/actions/auth-actions";

// const ProtectedRouteElement = ({element, to}) => {
//   const dispatch = useDispatch();
//   // const token = getCookie("accessToken");
//   const user = useSelector((state) => state.authStore.user);


//   useEffect(() => {
//     if (!user) {
//       dispatch(getUserAction(user))
//     }
//   }, [dispatch, user])

//   return user ? element : <Navigate to={to} replace />;
// }

const ProtectedRouteElement = ({children}) => {
  // const location = useLocation();
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.authStore.user);
  console.log("ProtectedRouteElement ", user)
  // const user = false;

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(getUserAction(user))
  //   }
  // }, [dispatch, user])

    if (!user) {
    return <Navigate to={"/login"} />
  }

  return children;
}



export default ProtectedRouteElement;



// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProtectedRouteElement = () => {
//   const auth = useSelector((state) => state.authStore.authSucces);

//   // const auth = true;

//   return auth ? <Outlet /> : <Navigate to={"/login"} />;
// };

// export default ProtectedRouteElement;


