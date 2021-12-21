import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

import { Provider, useSelector } from 'react-redux';

import Store from './store';

import "./main.scss";

const Main = React.lazy(() => import('./pages/Main.js'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.js'));
const Chat = React.lazy(() => import('./pages/Chat.js'));
const YouClicked = React.lazy(() => import('./pages/YouClicked.js'));

import { Back } from './components/Form.js';

const PageLoader = () => {
	return (<div>Loading...</div>);
}

const Body = () => {
	const userSession = useSelector((state) => state.userSession);
	return (
		<div>
			{userSession.logined ? <Back /> : null}
			<h1>React Example</h1>
			<ul>
				{!userSession.logined ? <li>
				<Link className="niceLink" to="/">Login Page</Link>
				</li> : null}
				<li>
					<Link className="niceLink" to="/youclicked">You Clicked</Link>
				</li>
				<li>
				<Link className="niceLink" to="/dashboard">{!userSession.logined ? <s>Dashboard</s> : "Dashboard"}</Link>
				</li>
				{userSession.logined ? 
					<>
						<li>
							<Link className="niceLink" to="/chat">Chat</Link>
						</li>
					</> : null}
			</ul>
		
			<Switch>
				{/* <Route path='/youclicked' children={<YouClicked />}/> */}
				<Route path='/dashboard' children={<Dashboard />}/>
				<Route path='/chat' children={<Chat />}/>
				<Route exact path="/" children={<Main />} />
				{/*<Route path="/:name" children={<Child />} />*/}
				{/*<Route path="/netflix/:name" children={<Child />} />*/}
			</Switch>
		</div>
	);
}

const App = () => {
	const [user, setUser] = React.useState(0);
  	return (
		<Provider store={Store}>
			<React.Suspense fallback={<PageLoader />}>
				<Router>
					<Body />
				</Router>
			</React.Suspense>
		</Provider>
  	);
}

ReactDOM.render(<App />, document.getElementById("root"));