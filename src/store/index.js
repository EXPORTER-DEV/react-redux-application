import { createStore, combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { chatReducer } from "./chatReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    userSession: userReducer,
    chatStorage: chatReducer,
});

export default createStore(rootReducer, composeWithDevTools());