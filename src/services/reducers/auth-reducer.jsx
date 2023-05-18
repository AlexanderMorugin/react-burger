import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,

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
    // forgot-password page
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

    // reset-password page
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

    // register page
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

    // login page
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
        accessToken: action.payload.accessToken,
        user: action.payload.user
      };
    }
    case LOGIN_FAILED: {
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

// export { authReducer };
