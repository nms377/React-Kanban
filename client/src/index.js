import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createdDevTools } from 'redux-devtools';
import '../public/css/app.css';

// reducers
import cards from './redux/reducers/cardReducer.js';
import users from './redux/reducers/userReducer.js';

// containers
import App from './containers/App';
import Nav from './containers/Nav/Nav.js';
import Board from './containers/Board/MainBoard.js';

// components
import LogIn from './components/Login.js';
import NewUser from './components/NewUser.js';
import Profile from './components/Profile.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const allReducers = combineReducers({
	users,
	cards
});

let store = createStore(allReducers,
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
        	<Route path='/profile' component={ Profile } />
        	<Route path='/board' component={ Board } />
				</div>
			</Router>
		</Provider>,
  document.getElementById('root')
);
