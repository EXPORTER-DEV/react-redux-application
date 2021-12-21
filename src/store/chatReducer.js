// import { createStore } from "redux";

const defaultState = {
    items: [],
};

const NEW_MESSAGE = 'NEW_MESSAGE';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const chatReducer = (state = defaultState, action) => {
    switch(action.type){
        case NEW_MESSAGE:
            const message = {id: Math.random(), timestamp: Date.now(), message: action.payload.message, author: action.payload.author};
            return {...state, items: [...state.items, message]};
        case CLEAR_MESSAGES:
            return {...defaultState};
        default:
            return state;
    }
}

export const actionNewMessage = (payload) => ({type: NEW_MESSAGE, payload});
export const actionClearMessages = (payload = {}) => ({type: CLEAR_MESSAGES, payload});