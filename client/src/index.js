import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createdDevTools } from 'redux-devtools';
import App from './containers/App';
import './index.css';
import cards from './reducers';
import {getCardsReq} from './lib';

let store = createStore(cards);

	console.log('store', store)


ReactDOM.render(
		<Provider store={store}>
	  	<App />
		</Provider>,
  document.getElementById('root')
);
