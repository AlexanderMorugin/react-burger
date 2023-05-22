import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  IngredientPage,
  NotFound404,
} from "../../pages";

import AppHeader from "../app-header/app-header";
import { getIngredientsAction } from "../../services/actions/ingredients-actions";
import styles from "./app.module.css";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import { getCookie } from "../../utils/cookie";
import { getUserAction } from "../../services/actions/auth-actions";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authStore.user);
  console.log("APP - user ", user);

  const accessToken = getCookie("accessToken");
  console.log("accessToken ", accessToken)

  // const login = useSelector((state) => state.authStore.loginSucces);
  // console.log("login ", login);

  useEffect(() => {
    dispatch(getIngredientsAction());
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<ConstructorPage />} />

          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* <Route
            path="/profile"
            element={
              <ProtectedRouteElement element={<ProfilePage />} to={"/login"} />
            }
          /> */}
          <Route path="/profile" element={
              <ProtectedRouteElement>
                <ProfilePage />
              </ProtectedRouteElement>
            }
          />

          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/login" element={!user && !accessToken ? <LoginPage /> : <Navigate to={"/"} />} />
          {/* <Route path="/login" element={(!login && !accessToken) ? <LoginPage /> : <Navigate to={"/"} />} /> */}

          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/register" element={(!user && !accessToken) ? <RegisterPage /> : <Navigate to={"/"} />} />

          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
          <Route path="/forgot-password" element={(!user && !accessToken) ? <ForgotPasswordPage /> : <Navigate to={"/"} />} />

          <Route path="/reset-password" element={<ResetPasswordPage />} />
          {/* <Route path="/reset-password" element={(!user && !accessToken) ? <ResetPasswordPage /> : <Navigate to={"/"} />} /> */}

          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
