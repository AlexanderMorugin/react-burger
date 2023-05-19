import {
  FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED,
  LOGOUT_REQUEST, LOGOUT_FAILED, LOGOUT_SUCCESS,
  GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED,
  CHANGE_USER_REQUEST, CHANGE_USER_SUCCESS, CHANGE_USER_FAILED,  
} from "../actions/auth-actions";

const initialState = {
  authRequest: false,
  authSucces: false,
  authFailed: false,

  email: "",
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        authSucces: true,
        authFailed: false,
        email: action.payload,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        authSucces: false,
        authFailed: true,
      };
    }


    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        authSucces: true,
        authFailed: false,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        authSucces: false,
        authFailed: true,
      };
    }


    case REGISTER_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        authSucces: true,
        authFailed: false,
        user: action.payload,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        authSucces: false,
        authFailed: true,
      };
    }


    case LOGIN_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        authSucces: true,
        authFailed: false,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        authSucces: false,
        authFailed: true,
      };
    }


    case LOGOUT_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        authSucces: true,
        authFailed: false,
        user: null,
        accessToken: null,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        authSucces: false,
        authFailed: true,
      };
    }


    case GET_USER_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        authSucces: true,
        authFailed: false,
        user: action.payload,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        authSucces: false,
        authFailed: true,
      };
    }


    case CHANGE_USER_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authFailed: false,
      };
    }
    case CHANGE_USER_SUCCESS: {
      return {
        ...state,
        authSucces: true,
        authFailed: false,
        user: action.payload,
      };
    }
    case CHANGE_USER_FAILED: {
      return {
        ...state,
        authSucces: false,
        authFailed: true,
      };
    }


    default: {
      return state;
    }
  }
};

