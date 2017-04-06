import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createdDevTools } from 'redux-devtools';
import App from './containers/App';
import '../public/css/app.css';
import cards from './reducers';

let store = createStore(cards,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(ReduxThunk)
);

	console.log('store', store)


ReactDOM.render(
		<Provider store={store}>
	  	<App />
		</Provider>,
  document.getElementById('root')
);
