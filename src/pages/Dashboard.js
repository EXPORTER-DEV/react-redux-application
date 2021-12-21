import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

import { Button, Input } from './../components/Form.js';

export default function Dashboard(props){
	const dispatch = useDispatch();
	const userSession = useSelector((state) => state.userSession);
	if(!userSession.logined){
		return (<Redirect to="/" />);
	}
	const logout = () => {
		dispatch({type: 'USER_LOGOUT'});
	}
	return (
	 	<>
	 		<h1>Hello, {userSession.username}!</h1>
	 		<div><Button name="Logout" options={{"className": "red"}} onClick={() => logout()}/></div>
	 	</>
	);
}