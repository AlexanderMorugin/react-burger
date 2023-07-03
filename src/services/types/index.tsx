// import { store } from '../../store';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { IIngredientsActions } from '../actions/ingredients-actions';
// import { TModalActions } from '../actions/modalActions';
import { TOrderActions } from '../actions/order-actions';
import { TAuthActions } from '../actions/auth-actions';
import { TWSActions } from '../actions/ws-actions';
// import { TIngred ientsState } from '../reducers/ingredients-reducer';
// import { TUserState } from '../reducers/userReducer';
// import { TOrderState } from '../reducers/orderReducer';
// import { TSocketState } from '../reducers/wsReducer';
// import { TModalState } from '../reducers/modalReducer';
import { rootReducer } from '../reducers/root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

type TApplicationActions =
  | IIngredientsActions
  // | TModalActions
  | TOrderActions
  | TAuthActions
  | TWSActions;

export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, RootState, unknown, TApplicationActions>>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;