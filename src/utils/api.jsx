export const BASE_URL = "https://norma.nomoreparties.space/api";

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
      email,
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
      password,
      token,
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

export const fetchLogout = (refreshToken) => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(checkResponse);
};

export const fetchGetUser = (accessToken) => {
  return fetch(`${BASE_URL}/auth/user`, {
    headers: {
      "Content-Type": "application/json",
      authorization: accessToken,
    },
  }).then(checkResponse);
};

export const fetchRefreshToken = (refreshToken) => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(checkResponse);
};

export const fetchChangeUser = (name, email, password, accessToken) => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: accessToken,
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then(checkResponse);
};

// export const fetchPostOrder = (data, accessToken) => {
//   return fetch(`${BASE_URL}/orders`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       'authorization': accessToken
//     },
//     body: JSON.stringify({
//       "ingredients": data
//     }),
//   }).then(checkResponse);
// };
