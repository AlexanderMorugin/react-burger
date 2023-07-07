import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients-reducer";
import { constructorReducer } from "./constructor-reducer";
import { orderReducer } from "./order-reducer";
import { authReducer } from "./auth-reducer";
import { wsReducer } from "./ws-reducer";

export const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  constructorStore: constructorReducer,
  orderStore: orderReducer,
  authStore: authReducer,
  socketStore: wsReducer,
});
