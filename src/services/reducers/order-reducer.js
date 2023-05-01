import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  // POST_ORDER_CLEAR
} from '../actions/order-actions';

const initialState = {
  orderLoading: false,
  orderFailed: null,
  data: null,
};


export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST:
      return {
        ...state,
        orderLoading: true,
        orderFailed: false

      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        orderLoading: false,
        orderFailed: false,
        data: action.payload
      };
    case POST_ORDER_FAILED:
      return {
        ...state,
        orderLoading: false,
        orderFailed: action.payload,
      };
    // case POST_ORDER_CLEAR:
    //   return {
    //     ...state,
    //     orderLoading: false,
    //     orderFailed: null,
    //     data: null
    //   }
    default:
      return state;
  }
};