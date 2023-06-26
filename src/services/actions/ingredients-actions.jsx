import { baseUrl, checkResponse } from "../../utils/api";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../../utils/constants";

export const getIngredientsRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (data) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: data,
});

export const getIngredientsFailed = () => ({
  type: GET_INGREDIENTS_FAILED,
});

export const getIngredientsAction = () => {
  return async (dispatch) => {
    dispatch(getIngredientsRequest());
    try {
      const res = await fetch(`${baseUrl}/ingredients`);
      const data = await checkResponse(res);
      dispatch(getIngredientsSuccess(data.data));
    } catch (error) {
      dispatch(getIngredientsFailed());
    }
  };
};

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
