import { useEffect } from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  IngredientPage,
  NotFound404
} from "../../pages";

import AppHeader from "../app-header/app-header";
// import BurgerIngredients from "../burger-ingredients/burger-ingredients";
// import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredientsAction } from "../../services/actions/ingredients-actions";
import styles from "./app.module.css";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsAction());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        {/* <Router> */}
          <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}


            <Route path="/" element={<ConstructorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound404 />} />
            {/* <Route path="/ingredients/:id " element={<IngredientPage />} /> */}
          </Routes>
        {/* </Router> */}
      </main>

      {/* <main className={styles.main}> */}
      {/* <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider> */}

      {/* <ConstructorPage /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <ForgotPasswordPage /> */}
      {/* <ResetPasswordPage /> */}
      {/* <ProfilePage /> */}
      {/* <IngredientPage /> */}
      {/* <ErrorPage /> */}

      {/* <OrderFeedPage />
        <OrderHistoryPage /> */}
      {/* </main> */}
    </>
  );
};

export default App;
