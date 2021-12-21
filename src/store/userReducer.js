// import { createStore } from "redux";

const defaultState = {
    logined: false,
    username: false,
};

const USER_LOGINED = 'USER_LOGINED';
const USER_LOGOUT = 'USER_LOGOUT';

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case USER_LOGINED:
            return {...state, logined: true, username: action.payload.username};
        case USER_LOGOUT:
            return {...defaultState};
        default:
            return state;
    }
}
export const actionUserLogined = (payload) => ({type: USER_LOGINED, payload});
export const actionUserLogout = (payload) => ({type: USER_LOGOUT, payload});