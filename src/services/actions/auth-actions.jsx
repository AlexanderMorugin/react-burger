import { BASE_URL, checkResponse, registerUserRequest } from "../../utils/api";

import {
  fetchLoginUser,
  fetchRegisterUser,

} from "../../utils/api";

import { setCookie, getCookie, deleteCookie } from "../../utils/cookie";

// forgot-password page
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const forgotPasswordRequest = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});
export const forgotPasswordSucces = (email) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: email,
});
export const forgotPasswordFailed = () => ({
  type: FORGOT_PASSWORD_FAILED,
});


// reset-password page
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD/REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD/SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD/FAILED";

export const resetPasswordRequest = () => {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};
export const resetPasswordSucces = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
};
export const resetPasswordFailed = () => {
  return {
    type: RESET_PASSWORD_FAILED,
  };
};


// register page
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = " REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const registerRequest = () => ({
  type: REGISTER_REQUEST
});
export const registerSuccess = (token) => ({
  type: REGISTER_SUCCESS,
  payload: token,
});
export const registerFailed = () => ({
  type: REGISTER_FAILED
});


// login page
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
export const loginFailed = () => ({
  type: LOGIN_FAILED
});









