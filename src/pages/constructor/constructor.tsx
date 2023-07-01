import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { FC } from "react";

export const ConstructorPage: FC = () => {
  return (
    <>
      <BurgerIngredients />
      <BurgerConstructor />
    </>
  );
};
