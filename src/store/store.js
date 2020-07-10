import {createStore, applyMiddleware,compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

// sagaMiddleware controls all the side-effects like fetching data from the server.
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    // Add other middleware on this line...
    sagaMiddleware,
];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);
export default store;

