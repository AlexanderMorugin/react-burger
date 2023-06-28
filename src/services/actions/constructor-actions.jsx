import { v4 } from "uuid";
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  RESET_INGREDIENT,
} from "../constants";

export const addBunAction = (bun) => {
  return {
    type: ADD_BUN,
    bun: {
      ...bun,
      type: "bun",
    },
  };
};

export const addIngridientAction = (ingridient) => {
  const key = v4();

  return {
    type: ADD_INGREDIENT,
    ingridient: {
      ...ingridient,
      key,
    },
  };
};

export const deleteIngredientAction = (ingridient, index) => {
  return {
    type: DELETE_INGREDIENT,
    index,
    ingridient,
  };
};

export const moveIngredientAction = (draggedIngredient, hoverIngredient) => {
  return {
    type: MOVE_INGREDIENT,
    data: { draggedIngredient, hoverIngredient },
  };
};

export const resetIngredientAction = () => {
  return {
    type: RESET_INGREDIENT,
  };
};
