export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

const URL = "https://norma.nomoreparties.space/api/ingredients";

export const getIngredientsRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (data) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: data,
});

export const getIngredientsFailed = () => ({
  type: GET_INGREDIENTS_FAILED,
});

const checkResponse = res => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};


export const getIngredientsAction = () => {
  return async (dispatch) => {
    dispatch(getIngredientsRequest());
    try {
      const res = await fetch(URL);
      const data = await checkResponse(res);
      dispatch(getIngredientsSuccess(data.data));
    } catch (error) {
      dispatch(getIngredientsFailed());
    }
  };
};


