export const baseUrl = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : res
        .json()
        .then((err) =>
          Promise.reject(`Ошибка загрузки данных с сервера: ${err.status}`)
        );
};

export async function request(url, options) {
  const res = await fetch(url, options);
  return checkResponse(res);
}

export const fetchForgotPassword = (email) => {
  return request(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  })
};

export const fetchResetPassword = (password, token) => {
  return request(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      token,
    }),
  })
};

export const fetchRegisterUser = (email, password, name) => {
  return request(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  })
};

export const fetchLoginUser = (email, password) => {
  return request(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
};

export const fetchLogout = (refreshToken) => {
  return request(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  })
};

export const fetchGetUser = (accessToken) => {
  return request(`${baseUrl}/auth/user`, {
    headers: {
      "Content-Type": "application/json",
      authorization: accessToken,
    },
  })
};

export const fetchRefreshToken = (refreshToken) => {
  return request(`${baseUrl}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  })
};

export const fetchChangeUser = (name, email, password, accessToken) => {
  return request(`${baseUrl}/auth/user`, {
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
  })
};

export const fetchOrder = (number) => {
  return request(`${baseUrl}/orders/${number}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
