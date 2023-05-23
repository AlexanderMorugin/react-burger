export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";
export const RESET_CURRENT_INGREDIENT = "RESET_CURRENT_INGREDIENT";
// export const OPEN_CURRENT_INGREDIENT = "OPEN_CURRENT_INGREDIENT";

export const setCurrentIngredientAction = (ingredient) => {
  return {
    type: SET_CURRENT_INGREDIENT,
    data: ingredient,
  };
};

export const resetCurrentIngredientAction = () => {
  return {
    type: RESET_CURRENT_INGREDIENT,
  };
};

// export const currentIngredientAction = (ingredient) => ({
//   type: OPEN_CURRENT_INGREDIENT,
//   payload: ingredient,
// });
