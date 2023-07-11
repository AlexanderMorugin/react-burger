import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../constants";
import { IOrderDetails } from "./order-actions";

export interface IWebSocket {
  wsStart: string;
  onOpen: string;
  onError: string;
  onClose: string;
  onMessage: string;
  wsSend: string;
}

export interface IWsMessage {
  orders: Array<IOrderDetails>;
  success: boolean;
  total: number;
  totalToday: number;
}

// -------------------------------------------------------
interface IWsConnectionClosed { readonly type: typeof WS_CONNECTION_CLOSED };
interface IWsConnectionStart { readonly type: typeof WS_CONNECTION_START; readonly payload: string };
interface IWsConnectionSuccess { readonly type: typeof WS_CONNECTION_SUCCESS };
interface IWsConnectionError { readonly type: typeof WS_CONNECTION_ERROR; readonly payload: string };
interface IWsSendMessage { readonly type: typeof WS_SEND_MESSAGE };
interface IWsGetMessage { readonly type: typeof WS_GET_MESSAGE; readonly payload: IWsMessage };

export const wsConnectionStart = (url: string): IWsConnectionStart => ({ type: WS_CONNECTION_START, payload: url });
export const wsConnectionSuccess = (): IWsConnectionSuccess => ({ type: WS_CONNECTION_SUCCESS });
export const wsConnectionError = (error: string): IWsConnectionError => ({ type: WS_CONNECTION_ERROR, payload: error });
export const wsConnectionClosed = (): IWsConnectionClosed => ({ type: WS_CONNECTION_CLOSED });
export const wsGetMessage = (message: IWsMessage): IWsGetMessage => ({ type: WS_GET_MESSAGE, payload: message });

// -------------------------------------------------------
export type TWSActions =
  | IWsGetMessage
  | IWsSendMessage
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionClosed
  | IWsConnectionError;
