import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/ingredients-actions";

const initialState  = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
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
    default:
      return state;
  }
};

