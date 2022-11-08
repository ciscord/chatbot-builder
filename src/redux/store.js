import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';
import rootSaga from './sagas';

const history         = createBrowserHistory();
const sagaMiddleware  = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares     = [sagaMiddleware, routeMiddleware];

const composeEnhancers = composeWithDevTools({
	name: 'Skael-Dashboard',
	trace: true,
	traceLimit: 20,
});

const store = createStore(
	combineReducers({
		...reducers,
		router: connectRouter(history),
	}),
	composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export {
	store,
	history,
};
