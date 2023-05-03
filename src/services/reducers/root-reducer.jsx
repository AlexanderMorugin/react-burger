import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients-reducer";
import { ingredientDetailsReducer } from "./ingredient-details-reducer";
import { constructorReducer } from "./constructor-reducer";
import { orderReducer } from "./order-reducer";

export const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  ingredientDetailsStore: ingredientDetailsReducer,
  constructorStore: constructorReducer,
  orderStore: orderReducer,
});
