import {
  fetchChangeUser,
  fetchGetUser,
  fetchLoginUser,
  fetchRefreshToken,
  fetchRegisterUser,
} from "../../utils/api";
import { fetchLogout } from "../../utils/api";
import { setCookie, getCookie, deleteCookie } from "../../utils/cookie";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CHANGE_USER_REQUEST,
  CHANGE_USER_SUCCESS,
  CHANGE_USER_FAILED,
  SET_AUTH_CHECKED,
  SET_USER,
} from "../../utils/constants";

// -------------------------------------------------------
export const forgotPasswordRequest = () => ({ type: FORGOT_PASSWORD_REQUEST });
export const forgotPasswordSucces = (email) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: email,
});
export const forgotPasswordFailed = () => ({ type: FORGOT_PASSWORD_FAILED });

// -------------------------------------------------------
export const resetPasswordRequest = () => {
  return { type: RESET_PASSWORD_REQUEST };
};
export const resetPasswordSucces = () => {
  return { type: RESET_PASSWORD_SUCCESS };
};
export const resetPasswordFailed = () => {
  return {
    type: RESET_PASSWORD_FAILED,
  };
};

// -------------------------------------------------------
export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = (token) => ({
  type: REGISTER_SUCCESS,
  payload: token,
});
export const registerFailed = () => ({ type: REGISTER_FAILED });

export const registerAction = (email, password, name) => {
  return function (dispatch) {
    dispatch(registerRequest());

    fetchRegisterUser(email, password, name)
      .then((res) => {
        dispatch(registerSuccess(res));
        setCookie("accessToken", res.accessToken, { path: "/" });
        setCookie("refreshToken", res.refreshToken, { path: "/" });
        console.log("fetchRegisterUser ", res);
      })
      .catch((err) => {
        dispatch(registerFailed(err));
        console.log(err);
      });
  };
};

// -------------------------------------------------------
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
export const loginFailed = () => ({ type: LOGIN_FAILED });

export const loginAction = (email, password) => {
  return function (dispatch) {
    dispatch(loginRequest());

    fetchLoginUser(email, password)
      .then((res) => {
        dispatch(loginSuccess(res));
        setCookie("accessToken", res.accessToken, { path: "/" });
        setCookie("refreshToken", res.refreshToken, { path: "/" });
      })
      .catch((err) => {
        loginFailed();
        console.log(err);
      });
  };
};

// -------------------------------------------------------
export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = (token) => ({
  type: LOGOUT_SUCCESS,
  payload: token,
});
export const logoutFailed = () => ({ type: LOGOUT_FAILED });

export const logoutAction = (token) => {
  return function (dispatch) {
    dispatch(logoutRequest());

    fetchLogout(token)
      .then((res) => {
        if (res) {
          deleteCookie("accessToken", { path: "/" });
          deleteCookie("refreshToken", { path: "/" });
          dispatch(logoutSuccess(res));
          console.log(res);
        }
      })
      .catch((err) => {
        logoutFailed();
        console.log(err);
      });
  };
};

// -------------------------------------------------------
export const getUserRequest = () => ({ type: GET_USER_REQUEST });
export const getUserSuccess = (res) => ({
  type: GET_USER_SUCCESS,
  payload: res,
});
export const getUserFailed = () => ({ type: GET_USER_FAILED });

export const getUserAction = () => {
  return function (dispatch) {
    dispatch(getUserRequest());
    return fetchGetUser(getCookie("accessToken"))
      .then((res) => {
        if (res) {
          dispatch(getUserSuccess(res));
          console.log(res);
        }
      })
      .catch((err) => {
        if (err.message === "jwt expired" || "jwt malformed") {
          dispatch(refreshTokenAction(getCookie("refreshToken")));
        }
        console.log(err);
      });
  };
};

export const refreshTokenAction = (refreshToken) => {
  return function (dispatch) {
    fetchRefreshToken(refreshToken).then((res) => {
      setCookie("accessToken", res.accessToken);
      setCookie("refreshToken", res.refreshToken);
      dispatch(getUserAction(getCookie("refreshToken")));
    });
  };
};

// -------------------------------------------------------
export const changeUserRequest = () => ({ type: CHANGE_USER_REQUEST });
export const changeUserSuccess = (userData) => ({
  type: CHANGE_USER_SUCCESS,
  payload: userData,
});
export const changeUserFailed = () => ({ type: CHANGE_USER_FAILED });

export const changeUserAction = (name, email, password, token) => {
  return function (dispatch) {
    dispatch(changeUserRequest());

    fetchChangeUser(name, email, password, token)
      .then((res) => {
        if (res) {
          dispatch(changeUserSuccess(res));
          console.log(res);
        }
      })
      .catch((err) => {
        changeUserFailed();
        console.log(err);
      });
  };
};

// -------------------------------------------------------
export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const checkUserAuth = () => {
  return (dispatch) => {
    if (getCookie("accessToken")) {
      dispatch(getUserAction())
        .catch(() => {
          deleteCookie("accessToken");
          deleteCookie("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};
