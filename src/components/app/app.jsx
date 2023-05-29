import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import {
  PATH_INDEX,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_FORGOT_RASSWORD,
  PATH_RESET_RASSWORD,
  PATH_PROFILE,
  PATH_NOT_FOUND,
  PATH_INGREDIENT,
} from "../../utils/constants";
import AppHeader from "../app-header/app-header";
import { getIngredientsAction } from "../../services/actions/ingredients-actions";
import styles from "./app.module.css";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import { getCookie } from "../../utils/cookie";
import { getUserAction } from "../../services/actions/auth-actions";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { resetCurrentIngredientAction } from "../../services/actions/ingredient-details-actions";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.modal;

  const getUserSucces = useSelector((state) => state.authStore.getUserSucces);

  const accessToken = getCookie("accessToken", { path: "/" });
  // console.log("APP - accessToken ", accessToken);

  useEffect(() => {
    dispatch(getIngredientsAction());

    if (accessToken) {
      dispatch(getUserAction());
    }
  }, [dispatch]);

  const closeModal = () => {
    dispatch(resetCurrentIngredientAction());
    window.removeEventListener("popstate", closeModal);
    const background = location.state && location.state.background;
    if (background) {
      navigate(background, { replace: true });
    } else {
      navigate(-1, { state: { modal: false } });
    }
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Routes>
          <Route path={PATH_INDEX} element={<ConstructorPage />} />
          <Route
            path={PATH_LOGIN}
            element={
              !getUserSucces && !accessToken ? (
                <LoginPage />
              ) : (
                <Navigate to={PATH_INDEX} />
              )
            }
          />
          <Route
            path={PATH_REGISTER}
            element={
              !getUserSucces && !accessToken ? (
                <RegisterPage />
              ) : (
                <Navigate to={PATH_INDEX} />
              )
            }
          />
          <Route
            path={PATH_FORGOT_RASSWORD}
            element={
              !getUserSucces && !accessToken ? (
                <ForgotPasswordPage />
              ) : (
                <Navigate to={PATH_INDEX} />
              )
            }
          />
          <Route path={PATH_RESET_RASSWORD} element={<ResetPasswordPage />} />
          <Route
            path={PATH_PROFILE}
            element={
              <ProtectedRouteElement
                element={<ProfilePage />}
                to={PATH_LOGIN}
              />
            }
          />
          <Route path={PATH_NOT_FOUND} element={<NotFound404 />} />
          <Route
            path={PATH_INGREDIENT}
            element={!background ? <IngredientPage /> : null}
          />
        </Routes>

        {background && (
          <Modal onClose={() => closeModal(location)}>
            <Routes>
              <Route path={PATH_INGREDIENT} element={<IngredientDetails />} />
            </Routes>
          </Modal>
        )}
      </main>
    </>
  );
};

export default App;
