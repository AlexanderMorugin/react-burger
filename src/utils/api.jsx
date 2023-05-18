export const BASE_URL = "https://norma.nomoreparties.space/api";

// export const INGREDIENTS_URL = "/ingredients";
// export const ORDER_URL = "/orders";
// export const FORGOT_PASS_URL = "/password-reset";
// export const RESET_PASS_URL = "/password-reset/reset";
// export const REGISTER_USER_URL = "/auth/register";
// export const LOGIN_URL = "/auth/login";
// export const USER_URL = "/auth/user";
// export const TOKEN_URL = "/auth/token";
// export const LOGOUT_URL = "/auth/logout";


export const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : res
        .json()
        .then((err) =>
          Promise.reject(`Ошибка загрузки данных с сервера: ${err.status}`)
        );
};

export const fetchForgotPassword = (email) => {
  return fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(checkResponse);
};

export const fetchResetPassword = (password, token) => {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  }).then(checkResponse);
};

export const fetchRegisterUser = (email, password, name) => {
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then(checkResponse);
};

export const fetchLoginUser = (email, password) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
};



