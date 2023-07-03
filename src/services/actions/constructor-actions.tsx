import { v4 } from "uuid";
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  RESET_INGREDIENT,
} from "../constants";

// -------------------------------------------------------
interface IAddBunAction { readonly type: typeof ADD_BUN, readonly bun: any };
interface IAddIngridientAction { readonly type: typeof ADD_INGREDIENT; readonly ingridient: any };
interface IDeleteIngredientAction { readonly type: typeof DELETE_INGREDIENT, readonly index: any, readonly ingridient: any };
interface IMoveIngredientAction { readonly type: typeof MOVE_INGREDIENT, readonly data: any };
interface IResetIngredientAction { readonly type: typeof RESET_INGREDIENT };

export const addBunAction = (bun: any): IAddBunAction => {
  return {
    type: ADD_BUN,
    bun: {
      ...bun,
      type: "bun",
    },
  };
};

export const addIngridientAction = (ingridient: any): IAddIngridientAction => {
  const key = v4();

  return {
    type: ADD_INGREDIENT,
    ingridient: {
      ...ingridient,
      key,
    },
  };
};

export const deleteIngredientAction = (ingridient: any, index: any): IDeleteIngredientAction => {
  return {
    type: DELETE_INGREDIENT,
    index,
    ingridient,
  };
};

export const moveIngredientAction = (draggedIngredient: any, hoverIngredient: any): IMoveIngredientAction => {
  return {
    type: MOVE_INGREDIENT,
    data: { draggedIngredient, hoverIngredient },
  };
};

export const resetIngredientAction = (): IResetIngredientAction => ({ type: RESET_INGREDIENT });

export type TConstructorActions =
  | IAddBunAction
  | IAddIngridientAction
  | IDeleteIngredientAction
  | IMoveIngredientAction
  | IResetIngredientAction;