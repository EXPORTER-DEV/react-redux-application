// import { createStore } from "redux";

const defaultState = {
    logined: false,
    username: false,
    loginProcess: {
        loading: false,
        error: false,
    }
};

const USER_LOGINED = 'USER_LOGINED';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED';
const USER_LOGIN_FINISHED = 'USER_LOGIN_FINISHED';
const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case USER_LOGINED:
            return {...state, logined: true, username: action.payload.username};
        case USER_LOGOUT:
            return {...defaultState};
        case USER_LOGIN_STARTED:
            return {...state, loginProcess: {...state.loginProcess, loading: true, error: false}};
        case USER_LOGIN_FINISHED:
            return {...state, loginProcess: {...state.loginProcess, loading: false}};
        case USER_LOGIN_FAILED:
            return {...state, loginProcess: {...state.loginProcess, error: true}};
        default:
            return state;
    }
}
export const actionUserLogined = (payload) => ({type: USER_LOGINED, payload});
export const actionUserLogout = (payload) => ({type: USER_LOGOUT, payload});
export const actionUserLoginStarted = (payload = {}) => ({type: USER_LOGIN_STARTED, payload});
export const actionUserLoginFinished = (payload = {}) => ({type: USER_LOGIN_FINISHED, payload});
export const actionUserLoginFailed = (payload = {}) => ({type: USER_LOGIN_FAILED, payload});