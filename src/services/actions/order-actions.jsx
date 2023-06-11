import { baseUrl, checkResponse } from "../../utils/api";
import { getCookie } from "../../utils/cookie";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";
export const POST_ORDER_RESET = "POST_ORDER_RESET";

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
    console.log("Заказ успешно отправлен. Результат:", result);
    dispatch(postOrderSuccessAction(result));
    return result;
  } catch (error) {
    dispatch(postOrderFailedAction(error));
    throw error;
  }
};
