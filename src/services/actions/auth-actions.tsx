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
} from "../constants";
import { AppDispatch } from "../types";

export interface IUser {
  name: string;
  email: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserData {
  email: string;
  user: IUser;
  isAuthChecked: boolean;
  accessToken: string;
}

// -------------------------------------------------------
interface IForgotPasswordRequest { readonly type: typeof FORGOT_PASSWORD_REQUEST };
interface IForgotPasswordSucces { readonly type: typeof FORGOT_PASSWORD_SUCCESS; readonly payload: boolean };
interface IForgotPasswordFailed { readonly type: typeof FORGOT_PASSWORD_FAILED };

export const forgotPasswordRequest = (): IForgotPasswordRequest => ({ type: FORGOT_PASSWORD_REQUEST });
export const forgotPasswordSucces = (status: boolean): IForgotPasswordSucces => ({ type: FORGOT_PASSWORD_SUCCESS, payload: status });
export const forgotPasswordFailed = (): IForgotPasswordFailed => ({ type: FORGOT_PASSWORD_FAILED });

// -------------------------------------------------------
interface IResetPasswordRequest { readonly type: typeof RESET_PASSWORD_REQUEST };
interface IResetPasswordSucces { readonly type: typeof RESET_PASSWORD_SUCCESS };
interface IResetPasswordFailed { readonly type: typeof RESET_PASSWORD_FAILED };

export const resetPasswordRequest = (): IResetPasswordRequest => ({ type: RESET_PASSWORD_REQUEST });
export const resetPasswordSucces = (): IResetPasswordSucces => ({ type: RESET_PASSWORD_SUCCESS });
export const resetPasswordFailed = (): IResetPasswordFailed => ({ type: RESET_PASSWORD_FAILED });

// -------------------------------------------------------
interface IRegisterRequest { readonly type: typeof REGISTER_REQUEST };
interface IRegisterSuccess { readonly type: typeof REGISTER_SUCCESS; readonly payload: IRegisterUser };
interface IRegisterFailed { readonly type: typeof REGISTER_FAILED; readonly payload: string };

export const registerRequest = (): IRegisterRequest => ({ type: REGISTER_REQUEST });
export const registerSuccess = (token: IRegisterUser): IRegisterSuccess => ({ type: REGISTER_SUCCESS, payload: token });
export const registerFailed = (error: string): IRegisterFailed => ({ type: REGISTER_FAILED, payload: error });

export const registerAction = (email: string, password: string, name: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(registerRequest());

    fetchRegisterUser(email, password, name)
      .then((res) => {
        dispatch(registerSuccess(res));
        setCookie("accessToken", res.accessToken, { path: "/" });
        setCookie("refreshToken", res.refreshToken, { path: "/" });
      })
      .catch((error) => {
        dispatch(registerFailed(error));
        console.log(error);
      });
  };
};

// -------------------------------------------------------
interface ILoginRequest { readonly type: typeof LOGIN_REQUEST };
interface ILoginSuccess { readonly type: typeof LOGIN_SUCCESS; readonly payload: IUserData };
interface ILoginFailed { readonly type: typeof LOGIN_FAILED };

export const loginRequest = (): ILoginRequest => ({ type: LOGIN_REQUEST });
export const loginSuccess = (token: IUserData): ILoginSuccess => ({ type: LOGIN_SUCCESS, payload: token });
export const loginFailed = (): ILoginFailed => ({ type: LOGIN_FAILED });

export const loginAction = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(loginRequest());

    fetchLoginUser(email, password)
      .then((res) => {
        dispatch(loginSuccess(res));
        setCookie("accessToken", res.accessToken, { path: "/" });
        setCookie("refreshToken", res.refreshToken, { path: "/" });
      })
      .catch((error) => {
        loginFailed();
        console.log(error);
      });
  };
};

// -------------------------------------------------------
interface ILogoutRequest { readonly type: typeof LOGOUT_REQUEST };
interface ILogoutSuccess { readonly type: typeof LOGOUT_SUCCESS; readonly payload: string };
interface ILogoutFailed { readonly type: typeof LOGOUT_FAILED };

export const logoutRequest = (): ILogoutRequest => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = (token: string): ILogoutSuccess => ({ type: LOGOUT_SUCCESS, payload: token });
export const logoutFailed = (): ILogoutFailed => ({ type: LOGOUT_FAILED });

export const logoutAction = (token: string | undefined) => {
  return function (dispatch: AppDispatch) {
    dispatch(logoutRequest());

    fetchLogout(token)
      .then((res) => {
        if (res) {
          deleteCookie("accessToken");
          deleteCookie("refreshToken");
          dispatch(logoutSuccess(res));
        }
      })
      .catch((error) => {
        logoutFailed();
        console.log(error);
      });
  };
};

// -------------------------------------------------------
interface IGetUserRequest { readonly type: typeof GET_USER_REQUEST };
interface IGetUserSuccess { readonly type: typeof GET_USER_SUCCESS; readonly payload: IUserData };
interface IGetUserFailed { readonly type: typeof GET_USER_FAILED; readonly payload: string };

export const getUserRequest = (): IGetUserRequest => ({ type: GET_USER_REQUEST });
export const getUserSuccess = (res: IUserData): IGetUserSuccess => ({ type: GET_USER_SUCCESS, payload: res });
export const getUserFailed = (error: string): IGetUserFailed => ({ type: GET_USER_FAILED, payload: error });

export const getUserAction = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getUserRequest());
    return fetchGetUser(getCookie("accessToken"))
      .then((res) => {
        if (res) {
          dispatch(getUserSuccess(res));
        }
      })
      .catch((error) => {
        if (error.message === "jwt expired" || "jwt malformed") {
          dispatch(refreshTokenAction(getCookie("refreshToken")));
        }
        console.log(error);
      });
  };
};

export const refreshTokenAction = (refreshToken: string | undefined) => {
  return function (dispatch: AppDispatch) {
    fetchRefreshToken(refreshToken).then((res) => {
      setCookie("accessToken", res.accessToken);
      setCookie("refreshToken", res.refreshToken);
      dispatch(getUserAction());
    });
  };
};

// -------------------------------------------------------
interface IChangeUserRequest { readonly type: typeof CHANGE_USER_REQUEST };
interface IChangeUserSuccess { readonly type: typeof CHANGE_USER_SUCCESS; readonly payload: IUser };
interface IChangeUserFailed { readonly type: typeof CHANGE_USER_FAILED; readonly payload: string };

export const changeUserRequest = (): IChangeUserRequest => ({ type: CHANGE_USER_REQUEST });
export const changeUserSuccess = (userData: IUser): IChangeUserSuccess => ({ type: CHANGE_USER_SUCCESS, payload: userData });
export const changeUserFailed = (error: string): IChangeUserFailed => ({ type: CHANGE_USER_FAILED, payload: error });

export const changeUserAction = (name: string, email: string, password: string, token: string | undefined) => {
  return function (dispatch: AppDispatch) {
    dispatch(changeUserRequest());

    fetchChangeUser(name, email, password, token)
      .then((res) => {
        if (res) {
          dispatch(changeUserSuccess(res));
          console.log(res);
        }
      })
      .catch((error) => {
        changeUserFailed(error);
        console.log(error);
      });
  };
};

// -------------------------------------------------------
interface ISetAuthChecked { readonly type: typeof SET_AUTH_CHECKED; readonly payload: boolean };
interface ISetUser { readonly type: typeof SET_USER; readonly payload: any };

export const setAuthChecked = (value: any): ISetAuthChecked => ({ type: SET_AUTH_CHECKED, payload: value });
export const setUser = (user: any): ISetUser => ({ type: SET_USER, payload: user });

export const checkUserAuth = () => {
  return (dispatch: AppDispatch) => {
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

// -------------------------------------------------------
export type TAuthActions =
  | IForgotPasswordRequest
  | IForgotPasswordSucces
  | IForgotPasswordFailed
  | IResetPasswordRequest
  | IResetPasswordSucces
  | IResetPasswordFailed
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailed
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailed
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailed
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailed
  | IChangeUserRequest
  | IChangeUserSuccess
  | IChangeUserFailed
  | ISetAuthChecked
  | ISetUser;


