import { rootReducer } from "../services/reducers/root-reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { socketMiddleware } from "../services/middleware/socket-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { wsUrl } from "../utils/constants";

import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../services/constants";

const wsActions = {
  wsStart: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_MESSAGE,
  wsSend: WS_SEND_MESSAGE,
};

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))
);

export const store = createStore(rootReducer, enhancer);
