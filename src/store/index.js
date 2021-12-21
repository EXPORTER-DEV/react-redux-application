import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { userReducer } from "./userReducer";
import { chatReducer } from "./chatReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middlewares/logger";
import { delay } from "../middlewares/delay";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    userSession: userReducer,
    chatStorage: chatReducer,
});

export default createStore(rootReducer, compose(applyMiddleware(logger, delay, thunk.withExtraArgument({api: 'test'})), composeWithDevTools()));