import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { IIngredientsActions } from '../actions/ingredients-actions';
import { TOrderActions } from '../actions/order-actions';
import { TAuthActions } from '../actions/auth-actions';
import { TWSActions } from '../actions/ws-actions';
import { rootReducer } from '../reducers/root-reducer';
import { TConstructorActions } from '../actions/constructor-actions';

export type RootState = ReturnType<typeof rootReducer>;

type TApplicationActions =
  | IIngredientsActions
  | TConstructorActions
  | TOrderActions
  | TAuthActions
  | TWSActions;

export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, RootState, unknown, TApplicationActions>>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;