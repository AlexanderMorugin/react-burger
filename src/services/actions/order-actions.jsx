import { BASE_URL, checkResponse } from "../../utils/api";

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
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: data,
      }),
    });
    const result = await checkResponse(response);
    dispatch(postOrderSuccessAction(result));
  } catch (error) {
    dispatch(postOrderFailedAction(error));
  }
};
