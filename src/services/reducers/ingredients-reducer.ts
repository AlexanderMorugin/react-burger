import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../constants";
import { IIngredient, IIngredientsActions } from '../actions/ingredients-actions';

type TIngredientsState = {
  ingredients: Array<IIngredient>;
  ingredientsRequest: boolean;
  ingredientsSuccess: boolean;
  ingredientsFailed: boolean;
  сurrentIngredient: IIngredient | undefined;
};

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsSuccess: false,
  ingredientsFailed: false,
  сurrentIngredient: undefined,
};

export const ingredientsReducer = (state = initialState, action: IIngredientsActions): TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsFailed: false,
        ingredientsRequest: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        ingredientsFailed: false,
        ingredientsRequest: false,
        ingredientsSuccess: true,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
        ingredientsSuccess: false,
      };
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        сurrentIngredient: action.payload,
      };
    }
    case RESET_CURRENT_INGREDIENT: {
      return {
        ...state,
        сurrentIngredient: undefined,
      };
    }
    default:
      return state;
  }
};
