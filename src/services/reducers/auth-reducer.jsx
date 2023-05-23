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
  forgotRequest: false,
  forgotSucces: false,
  forgotFailed: false,

  resetRequest: false,
  resetSucces: false,
  resetFailed: false,

  registerRequest: false,
  registerSucces: false,
  registerFailed: false,

  loginRequest: false,
  loginSucces: false,
  loginFailed: false,

  logoutRequest: false,
  logoutSucces: false,
  logoutFailed: false,

  getUserRequest: false,
  getUserSucces: false,
  getUserFailed: false,

  changeUserRequest: false,
  changeUserSucces: false,
  changeUserFailed: false,

  // email: "",
  email: false,
  accessToken: null,
  user: null,
  // user: {
  //   email: "",
  //   name: "",
  // },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
        forgotFailed: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotSucces: true,
        forgotFailed: false,
        email: action.payload,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotSucces: false,
        forgotFailed: true,
      };
    }


    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetSucces: true,
        resetFailed: false,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetSucces: false,
        resetFailed: true,
      };
    }


    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerSucces: true,
        registerFailed: false,
        user: action.payload,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerSucces: false,
        registerFailed: true,
      };
    }


    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginSucces: true,
        loginFailed: false,
        accessToken: action.payload.accessToken,
        // accessToken: action.payload,
        user: action.payload.user,
        // user: action.payload,
        // user: {
        //   email: action.email,
        //   name: action.name,
        // },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginSucces: false,
        loginFailed: true,
      };
    }


    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutSucces: true,
        logoutFailed: false,
        user: null,
        accessToken: null,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutSucces: false,
        logoutFailed: true,
      };
    }


    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserSucces: true,
        getUserFailed: false,
        user: action.payload,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserSucces: false,
        getUserFailed: true,
      };
    }


    case CHANGE_USER_REQUEST: {
      return {
        ...state,
        changeUserRequest: true,
        changeUserFailed: false,
      };
    }
    case CHANGE_USER_SUCCESS: {
      return {
        ...state,
        changeUserSucces: true,
        changeUserFailed: false,
        user: action.payload,
      };
    }
    case CHANGE_USER_FAILED: {
      return {
        ...state,
        changeUserSucces: false,
        changeUserFailed: true,
      };
    }


    default: {
      return state;
    }
  }
};

