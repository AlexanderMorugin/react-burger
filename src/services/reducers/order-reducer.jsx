import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  POST_ORDER_RESET,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../constants";

const initialState = {
  data: null,
  orderRequest: false,
  orderSuccess: false,
  orderFailed: false,
  order: null
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        orderRequest: false,
        orderSuccess: true,
        orderFailed: false,
      };
    case POST_ORDER_FAILED:
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
        orderSuccess: false,
      };
    case POST_ORDER_RESET:
      return {
        ...state,
        orderFailed: null,
        data: null,
      };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        orderRequest: false,
        orderSuccess: true,
        orderFailed: false,
      };
    case GET_ORDER_FAILED:
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
        orderSuccess: false,
      };
    default:
      return state;
  }
};
