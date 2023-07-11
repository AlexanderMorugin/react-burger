import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../services/hooks";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import {
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  IngredientPage,
  NotFound404,
  FeedPage,
  OrderInfoPage,
  ProfileFeedPage,
} from "../../pages";
import {
  indexUrl,
  loginUrl,
  registerUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
  profileUrl,
  notFoundUrl,
  ingredientIdUrl,
  profileOrdersUrl,
  profileOrdersNumberUrl,
  feedUrl,
  feedNumberUrl,
} from "../../utils/constants";
import { AppHeader } from "../app-header/app-header";
import { getIngredientsAction } from "../../services/actions/ingredients-actions";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { checkUserAuth } from "../../services/actions/auth-actions";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import { FeedOrderCard } from "../feed-order-card/feed-order-card";
import styles from "./app.module.css";

export const App: FC = () => {
  const dispatch = useTypedDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { ingredientsSuccess } = useTypedSelector(state => state.ingredientsStore);

  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredientsAction());
    dispatch(checkUserAuth());
  }, []);

  const closeModal = () => {
    return navigate(-1);
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        {ingredientsSuccess && (
          <>
            <Routes location={background || location}>
              <Route path={indexUrl} element={<ConstructorPage />} />
              <Route path={loginUrl} element={<ProtectedRouteElement onlyUnAuth component={<LoginPage />} />} />
              <Route path={registerUrl} element={<ProtectedRouteElement onlyUnAuth component={<RegisterPage />} />} />
              <Route path={forgotPasswordUrl} element={<ProtectedRouteElement onlyUnAuth component={<ForgotPasswordPage />} />} />
              <Route path={resetPasswordUrl} element={<ProtectedRouteElement onlyUnAuth component={<ResetPasswordPage />} />} />
              <Route path={profileUrl} element={<ProtectedRouteElement component={<ProfilePage />} />}>
                <Route path={profileOrdersUrl} element={<ProtectedRouteElement component={<ProfileFeedPage />} />} />
              </Route>
              <Route path={ingredientIdUrl} element={<IngredientPage />} />
              <Route path={feedUrl} element={<FeedPage />} />
              <Route path={feedNumberUrl} element={<OrderInfoPage />} />
              <Route path={profileOrdersNumberUrl} element={<ProtectedRouteElement component={<OrderInfoPage />} />} />
              <Route path={notFoundUrl} element={<NotFound404 />} />
            </Routes>
            {background && (
              <Routes>
                <Route
                  path={feedNumberUrl}
                  element={
                    <Modal onClose={() => closeModal()}>
                      <FeedOrderCard />
                    </Modal>
                  }
                />
                <Route
                  path={profileOrdersNumberUrl}
                  element={
                    <ProtectedRouteElement
                      component={
                        <Modal onClose={() => closeModal()}>
                          <FeedOrderCard />
                        </Modal>
                      }
                    />
                  }
                />
                <Route
                  path={ingredientIdUrl}
                  element={
                    <Modal
                      onClose={() => closeModal()}
                      title="Детали ингредиента"
                    >
                      <IngredientDetails />
                    </Modal>
                  }
                />
              </Routes>
            )}
          </>
        )}
      </main>
    </>
  );
};
