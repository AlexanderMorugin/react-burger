import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  PATH_INDEX,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_FORGOT_RASSWORD,
  PATH_RESET_RASSWORD,
  PATH_PROFILE,
  PATH_NOT_FOUND,
  PATH_INGREDIENT_ID,
  PATH_PROFILE_ORDERS,
  PATH_PROFILE_ORDERS_NUMBER,
  PATH_FEED,
  PATH_FEED_NUMBER,
} from "../../utils/constants";
import AppHeader from "../app-header/app-header";
import { getIngredientsAction } from "../../services/actions/ingredients-actions";
import styles from "./app.module.css";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import { checkUserAuth } from "../../services/actions/auth-actions";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { FeedOrderCard } from "../feed-order-card/feed-order-card";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { ingredientsSuccess } = useSelector((state) => state.ingredientsStore);

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
              <Route path={PATH_INDEX} element={<ConstructorPage />} />
              <Route
                path={PATH_LOGIN}
                element={
                  <ProtectedRouteElement onlyUnAuth component={<LoginPage />} />
                }
              />
              <Route
                path={PATH_REGISTER}
                element={
                  <ProtectedRouteElement
                    onlyUnAuth
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path={PATH_FORGOT_RASSWORD}
                element={
                  <ProtectedRouteElement
                    onlyUnAuth
                    component={<ForgotPasswordPage />}
                  />
                }
              />
              <Route
                path={PATH_RESET_RASSWORD}
                element={
                  <ProtectedRouteElement
                    onlyUnAuth
                    component={<ResetPasswordPage />}
                  />
                }
              />
              <Route
                path={PATH_PROFILE}
                element={<ProtectedRouteElement component={<ProfilePage />} />}
              >
                <Route
                  path={PATH_PROFILE_ORDERS}
                  element={
                    <ProtectedRouteElement component={<ProfileFeedPage />} />
                  }
                />
              </Route>
              <Route path={PATH_INGREDIENT_ID} element={<IngredientPage />} />
              <Route path={PATH_FEED} element={<FeedPage />} />
              <Route path={PATH_FEED_NUMBER} element={<OrderInfoPage />} />
              <Route
                path={PATH_PROFILE_ORDERS_NUMBER}
                element={
                  <ProtectedRouteElement component={<OrderInfoPage />} />
                }
              />
              <Route path={PATH_NOT_FOUND} element={<NotFound404 />} />
            </Routes>
            {background && (
              <Routes>
                <Route
                  path={PATH_FEED_NUMBER}
                  element={
                    <Modal onClose={() => closeModal()}>
                      <FeedOrderCard />
                    </Modal>
                  }
                />
                <Route
                  path={PATH_PROFILE_ORDERS_NUMBER}
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
                  path={PATH_INGREDIENT_ID}
                  element={
                    <Modal
                      onClose={() => closeModal(location)}
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

export default App;
