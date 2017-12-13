import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {socialWeaver} from './reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware,routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router';

const middleware = routerMiddleware(browserHistory)
let store = createStore(socialWeaver,composeWithDevTools(
						applyMiddleware(thunk, middleware),routerReducer))

render(
	<Provider store = {store}>
   		<AppRoutes/>
   	</Provider>,
    document.getElementById('root')
);
registerServiceWorker();
