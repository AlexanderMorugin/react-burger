import { v4 } from "uuid";

export const ADD_BUN = "ADD_BUN";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const MOVE_INGREDIENT = "MOVE_INGREDIENT";
export const RESET_INGREDIENT = "RESET_INGREDIENT";

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
