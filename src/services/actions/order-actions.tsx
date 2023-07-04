import { baseUrl, checkResponse, fetchOrder } from "../../utils/api";
import { getCookie } from "../../utils/cookie";
import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  POST_ORDER_RESET,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../constants";
import { AppDispatch } from "../types";

export interface IOrderDetails {
  readonly _id: string;
  readonly ingredients: Array<string>;
  readonly status: string;
  readonly name: string;
  readonly createdAt: string | number | Date;
  readonly updatedAt: string;
  readonly number: number;
  readonly orders?: any;
}

export interface IOrderData {
   readonly order: {
      readonly _id: string;
      readonly ingredients: Array<string>;
      readonly status: string;
      readonly name: string;
      readonly createdAt: string | number | Date;
      readonly updatedAt: string;
      readonly number: number;
    }
}

// -------------------------------------------------------
interface IPostOrderRequest { readonly type: typeof POST_ORDER_REQUEST };
interface IPostOrderSuccess { readonly type: typeof POST_ORDER_SUCCESS, readonly payload: any };
interface IPostOrderFailed { readonly type: typeof POST_ORDER_FAILED };
interface IPostOrderReset { readonly type: typeof POST_ORDER_RESET };

export const postOrderRequest = (): IPostOrderRequest => ({ type: POST_ORDER_REQUEST });
export const postOrderSuccess = (data: IOrderDetails): IPostOrderSuccess => ({ type: POST_ORDER_SUCCESS, payload: data });
export const postOrderFailed = (): IPostOrderFailed => ({ type: POST_ORDER_FAILED });
export const postOrderResetAction = ():IPostOrderReset => ({ type: POST_ORDER_RESET });

export const postOrderAction = (data: Array<string>) => async (dispatch: AppDispatch) => {
  try {
    dispatch(postOrderRequest());

    const accessTokenWithBearer: any = getCookie("accessToken");
    const accessToken = accessTokenWithBearer.replace("Bearer ", "");

    const response = await fetch(`${baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        ingredients: data,
      }),
    });
    const result = await checkResponse(response);
    dispatch(postOrderSuccess(result));
    return result;
  } catch (error) {
    dispatch(postOrderFailed());
    console.log(error);
  }
};

// -------------------------------------------------------
interface IGetOrderRequest { readonly type: typeof GET_ORDER_REQUEST };
interface IGetOrderSuccess { readonly type: typeof GET_ORDER_SUCCESS, readonly payload: any };
interface IGetOrderFailed { readonly type: typeof GET_ORDER_FAILED };

export const getOrderRequest = (): IGetOrderRequest => ({ type: GET_ORDER_REQUEST });
export const getOrderSuccess = (res: any): IGetOrderSuccess => ({ type: GET_ORDER_SUCCESS, payload: res.orders[0] });
export const getOrderFailed = (): IGetOrderFailed => ({ type: GET_ORDER_FAILED });

export const getOrder = (number: number) => {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderRequest());
    
    fetchOrder(number)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.orders[0],
        });
      })
      .catch((error) => {
        getOrderFailed();
        console.log(error);
      });
    }
  };


export type TOrderActions =
  | IPostOrderRequest
  | IPostOrderSuccess
  | IPostOrderFailed
  | IPostOrderReset
  | IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderFailed;