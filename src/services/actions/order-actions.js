export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
// export const POST_ORDER_CLEAR = 'POST_ORDER_CLEAR';

const URL = "https://norma.nomoreparties.space/api/orders";

const checkResponse = res => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};

export const postOrderRequest = () => ({
  type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (data) => ({
  type: POST_ORDER_SUCCESS,
  payload: data,
});

export const postOrderFailed = (error) => ({
  type: POST_ORDER_FAILED,
  payload: error,
});

// export function postOrderClear() {
//   return {
//     type: POST_ORDER_CLEAR,
//   }
// }

export const postOrderAction = (data) => async (dispatch) => {
  try {
    dispatch(postOrderRequest());
    const response = await fetch(`${URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ingredients: data
      })
    });
    const result = await checkResponse(response);
    dispatch(postOrderSuccess(result));
  } catch (error) {
    dispatch(postOrderFailed(error));
  }
};


