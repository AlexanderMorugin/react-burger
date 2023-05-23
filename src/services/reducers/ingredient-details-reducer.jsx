import {
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
  // OPEN_CURRENT_INGREDIENT,
} from "../actions/ingredient-details-actions";

const initialState = {
  сurrentIngredient: null,
};
export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        сurrentIngredient: { ...state.сurrentIngredient, ...action.data },
      };
    }
    case RESET_CURRENT_INGREDIENT: {
      return {
        ...state,
        сurrentIngredient: null,
      };
    }
    // case OPEN_CURRENT_INGREDIENT: {
    //   return {
    //     ...state,
    //     currentIngredient: action.payload
    //   };
    // }
    default: {
      return state;
    }
  }
};
