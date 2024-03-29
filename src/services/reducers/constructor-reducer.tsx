import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  RESET_INGREDIENT,
} from "../constants";
import { TConstructorActions } from "../actions/constructor-actions";
import { IIngredient } from "../actions/ingredients-actions";

type TConstructorState = {
  bun: IIngredient | null;
  ingredients: Array<IIngredient>;
};

const initialState: TConstructorState = {
  bun: null,
  ingredients: [],
};

export const constructorReducer = (state = initialState, action: TConstructorActions): TConstructorState => {
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
    case MOVE_INGREDIENT:
      const moveIngredients = [...state.ingredients];
      moveIngredients.splice(
        action.data.draggedIngredient,
        0,
        moveIngredients.splice(action.data.hoverIngredient, 1)[0]
      );
      return {
        ...state,
        ingredients: moveIngredients,
      };
    case RESET_INGREDIENT:
      return initialState;

    default:
      return state;
  }
};
