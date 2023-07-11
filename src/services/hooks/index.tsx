import { 
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "../types";

export const useTypedDispatch = () => dispatchHook<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = selectorHook;