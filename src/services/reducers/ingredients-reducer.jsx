import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../actions/ingredients-actions";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  сurrentIngredient: null,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsFailed: false,
        ingredientsRequest: false,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        ingredientsFailed: false,
        ingredientsRequest: true,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredientsFailed: true,
      };
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
    default:
      return state;
  }
};
