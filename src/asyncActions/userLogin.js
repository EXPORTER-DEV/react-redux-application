import { actionUserLogined, actionUserLoginStarted, actionUserLoginFinished, actionUserLoginFailed } from "../store/userReducer";

export const userLogin = (id, username, delay) => (dispatch, getState, { api }) => {
    console.log('API: '+api);
    dispatch(actionUserLoginStarted());
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => dispatch({...actionUserLogined({username}), meta: {delay: delay}}))
    .catch(e => dispatch(actionUserLoginFailed()));
    dispatch(actionUserLoginFinished());
}