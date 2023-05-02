export const URL_GET_INGREDIENTS = "https://norma.nomoreparties.space/api/ingredients";

export const URL_POST_ORDER = "https://norma.nomoreparties.space/api/orders";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
