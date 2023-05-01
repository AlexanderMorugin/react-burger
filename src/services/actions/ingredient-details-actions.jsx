export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";

export const setCurrentIngredientAction = (ingredient) => {
  return {
    type: SET_CURRENT_INGREDIENT,
    data: ingredient,
  };
};
