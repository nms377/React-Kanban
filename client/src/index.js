import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createdDevTools } from 'redux-devtools';
import '../public/css/app.css';
import cards from './reducers';

// containers
import App from './containers/App';
import Nav from './containers/Nav/Nav.js';

// components
import LogIn from './components/Login.js';
import NewUser from './components/NewUser.js';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();

let store = createStore(cards,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(ReduxThunk)
);

	console.log('store', store)


ReactDOM.render(
		<Provider store={ store } history={ history }>
			<Router>
				<div>
					<Nav />
					<Route exact path='/' component={ App } />
        	<Route path='/login' component={ LogIn } />
        	<Route path='/newuser' component={ NewUser } />
				</div>
			</Router>
		</Provider>,
  document.getElementById('root')
);
