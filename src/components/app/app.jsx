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

  const userData = useSelector((state) => state.authStore.user);
  // console.log("APP - userData ", userData);

  // const accessToken = null;
  const accessToken = getCookie("accessToken");
  // console.log("APP - accessToken ", accessToken);

  useEffect(() => {
    dispatch(getIngredientsAction());
    dispatch(getUserAction());
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
          <Route path="/" element={<ConstructorPage />} />
          <Route path="/login" element={(!userData && !accessToken) ? <LoginPage /> : <Navigate to={'/'} /> }/>
          <Route path="/register" element={(!userData && !accessToken) ? <RegisterPage /> : <Navigate to={'/'} /> }/>
          <Route path="/forgot-password" element={(!userData && !accessToken) ? <ForgotPasswordPage /> : <Navigate to={'/'}/>} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />} to={'/login'} />} />
          <Route path="*" element={<NotFound404 />} />
          <Route path="/ingredients/:id" element={!background ? <IngredientPage /> : null} />          
        </Routes>

        {background && (
          <Modal onClose={() => closeModal(location)}>
            <Routes>
              <Route path="/ingredients/:id" element={<IngredientDetails />} />
            </Routes>
          </Modal>
        )}
      </main>
    </>
  );
};

export default App;
