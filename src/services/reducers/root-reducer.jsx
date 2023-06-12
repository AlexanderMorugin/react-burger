import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients-reducer";
// import { ingredientDetailsReducer } from "./ingredient-details-reducer";
import { constructorReducer } from "./constructor-reducer";
import { orderReducer } from "./order-reducer";
import { authReducer } from "./auth-reducer";
import { wsReducer } from "./ws-reducer";

export const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  // ingredientDetailsStore: ingredientDetailsReducer,
  constructorStore: constructorReducer,
  orderStore: orderReducer,
  authStore: authReducer,
  socketStore: wsReducer,
});

export const getAuthData = (state) => state.authStore;
