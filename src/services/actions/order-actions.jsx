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
} from "../../utils/constants";

export const postOrderRequestAction = () => ({
  type: POST_ORDER_REQUEST,
});

export const postOrderSuccessAction = (data) => ({
  type: POST_ORDER_SUCCESS,
  payload: data,
});

export const postOrderFailedAction = (error) => ({
  type: POST_ORDER_FAILED,
  payload: error,
});

export const postOrderResetAction = () => {
  return {
    type: POST_ORDER_RESET,
  };
};

export const postOrderAction = (data) => async (dispatch) => {
  try {
    dispatch(postOrderRequestAction());

    const accessTokenWithBearer = getCookie("accessToken");
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
    // console.log("Заказ успешно отправлен. Результат:", result);
    dispatch(postOrderSuccessAction(result));
    return result;
  } catch (error) {
    dispatch(postOrderFailedAction(error));
    throw error;
  }
};

export const getOrder =
  (number) =>
  (dispatch) => {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    return fetchOrder(number)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.orders[0],
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          payload: err,
        });
      });
  };
