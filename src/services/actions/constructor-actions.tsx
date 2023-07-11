import { v4 } from "uuid";
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  RESET_INGREDIENT,
} from "../constants";
import { IIngredient } from "./ingredients-actions";

// -------------------------------------------------------
interface IAddBunAction { readonly type: typeof ADD_BUN, readonly bun: IIngredient };
interface IAddIngridientAction { readonly type: typeof ADD_INGREDIENT; readonly ingridient: IIngredient };
interface IDeleteIngredientAction { readonly type: typeof DELETE_INGREDIENT, readonly index: number, readonly ingridient: IIngredient };
interface IMoveIngredientAction { readonly type: typeof MOVE_INGREDIENT, readonly data: any };
interface IResetIngredientAction { readonly type: typeof RESET_INGREDIENT };

export const addBunAction = (bun: IIngredient): IAddBunAction => {
  return {
    type: ADD_BUN,
    bun: {
      ...bun,
      type: "bun",
    },
  };
};

export const addIngridientAction = (ingridient: IIngredient): IAddIngridientAction => {
  const key = v4();

  return {
    type: ADD_INGREDIENT,
    ingridient: {
      ...ingridient,
      key,
    },
  };
};

export const deleteIngredientAction = (ingridient: IIngredient, index: number): IDeleteIngredientAction => {
  return {
    type: DELETE_INGREDIENT,
    index,
    ingridient,
  };
};

export const moveIngredientAction = (draggedIngredient: IIngredient, hoverIngredient: any): IMoveIngredientAction => {
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