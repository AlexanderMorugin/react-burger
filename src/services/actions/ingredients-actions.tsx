import { baseUrl, checkResponse } from "../../utils/api";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../constants";
import { AppDispatch } from "../types";

export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

// -------------------------------------------------------
interface IGetIngredientsRequest { readonly type: typeof GET_INGREDIENTS_REQUEST };
interface IgetIngredientsSuccess { readonly type: typeof GET_INGREDIENTS_SUCCESS; readonly payload: Array<IIngredient> };
interface IgetIngredientsFailed { readonly type: typeof GET_INGREDIENTS_FAILED };

export const getIngredientsRequest = (): IGetIngredientsRequest => ({ type: GET_INGREDIENTS_REQUEST });
export const getIngredientsSuccess = (data: Array<IIngredient>): IgetIngredientsSuccess => ({ type: GET_INGREDIENTS_SUCCESS, payload: data });
export const getIngredientsFailed = (): IgetIngredientsFailed => ({ type: GET_INGREDIENTS_FAILED });

export const getIngredientsAction = () => {
  return async (dispatch: AppDispatch) => {
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

// -------------------------------------------------------
interface ISetCurrentIngredientAction { readonly type: typeof SET_CURRENT_INGREDIENT; readonly payload: IIngredient | undefined };
interface IResetCurrentIngredientAction { readonly type: typeof RESET_CURRENT_INGREDIENT };

export const setCurrentIngredientAction = (ingredient: IIngredient | undefined): ISetCurrentIngredientAction => ({ type: SET_CURRENT_INGREDIENT, payload: ingredient });
export const resetCurrentIngredientAction = (): IResetCurrentIngredientAction => ({ type: RESET_CURRENT_INGREDIENT });

// -------------------------------------------------------
export type IIngredientsActions =
  | IGetIngredientsRequest
  | IgetIngredientsSuccess
  | IgetIngredientsFailed
  | ISetCurrentIngredientAction
  | IResetCurrentIngredientAction;

