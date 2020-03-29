import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';
import {createLogger } from 'redux-logger';
import App from './container/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger()
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render( 
				<Provider store={store} >
					<App/>
				</Provider>
				, document.getElementById('root'));


serviceWorker.register();
