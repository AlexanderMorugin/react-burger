import { v4 } from "uuid";

export const ADD_BUN = "ADD_BUN";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

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
  return {
    type: ADD_INGREDIENT,
    ingridient: {
      ...ingridient,
      key: v4(),
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
