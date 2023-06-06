import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";

import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { resetCurrentIngredientAction } from "../../services/actions/ingredient-details-actions";
import Modal from "../../components/modal/modal";
import { PATH_INGREDIENT } from "../../utils/constants";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

export const ConstructorPage = () => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const backgroundIngredient = location.state && location.state.modal;

  // const closeModal = () => {
  //   dispatch(resetCurrentIngredientAction());
  //   window.removeEventListener("popstate", closeModal);
  //   const background = location.state && location.state.background;
  //   if (background) {
  //     navigate(background, { replace: true });
  //   } else {
  //     navigate(-1, { state: { modal: false } });
  //   }
  // };

  return (
    <>
      <BurgerIngredients />
      <BurgerConstructor />

      {/* {backgroundIngredient && (
    <Modal onClose={() => closeModal(location)}>
      <Routes>
        <Route path={PATH_INGREDIENT} element={<IngredientDetails />} />
      </Routes>
    </Modal>
  )} */}
    </>

  );

};
