import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from "../actions/constructor-actions";

const initialState = {
  bun: "",
  ingredients: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN:
      return {
        ...state,
        bun: action.bun,
      };

    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingridient],
      };

    case DELETE_INGREDIENT:
      const deleteIngredients = [...state.ingredients];
      deleteIngredients.splice(action.index, 1);
      return {
        ...state,
        ingredients: deleteIngredients,
      };

    default:
      return state;
  }
};
