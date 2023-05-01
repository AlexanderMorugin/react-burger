import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/ingredients-actions.js";

const initialState  = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsLoading: true,
        ingredientsFailed: false,
        ingredientsRequest: false,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        ingredientsLoading: false,
        ingredientsFailed: false,
        ingredientsRequest: true,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredientsLoading: false,
        ingredientsFailed: true,
      };
    default:
      return state;
  }
};

