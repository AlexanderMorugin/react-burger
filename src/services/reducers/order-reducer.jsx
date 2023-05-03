import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  POST_ORDER_RESET,
} from "../actions/order-actions";

const initialState = {
  data: "",
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        orderRequest: true,
        orderFailed: false,
      };
    case POST_ORDER_FAILED:
      return {
        ...state,
        orderFailed: true,
      };
    case POST_ORDER_RESET:
      return {
        ...state,
        orderFailed: null,
        data: "",
      };
    default:
      return state;
  }
};
