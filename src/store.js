import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Atuomaticaly takes index.js

// State for app
const initialState = {}

const middleware = [thunk];

// Root reducer, state, enhancers
const store = createStore(
        rootReducer, 
        initialState, 
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

export default store;