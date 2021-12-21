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

import { actionUserLogined } from '../store/userReducer.js';


import { Button, Input } from './../components/Form.js';

export default function Main(props){
	const dispatch = useDispatch();
	const userSession = useSelector((state) => state.userSession);
	const [name, setName] = React.useState('');
	// let params = useParams();

	if(userSession.logined){
		return (<Redirect to="/dashboard" />);
	}

	const login = () => {
		if(!name || name.replace(/\s/gi, "").toLowerCase() == "root"){
			document.getElementById("name").classList.add("error");
			return;
		}
		dispatch(actionUserLogined({username: name}));
		// props.setUser({name: name});
		setName('');
	}

	return (
		<>
	 		<h1>Main Page</h1>
	 		<Input name="Please, enter your name:" id="name" onChange={(e) => {e.target.classList.remove("error"); setName(e.target.value)}}/>
	 		<div><Button name="Login" onClick={login}/></div>
	 	</>
	);
}