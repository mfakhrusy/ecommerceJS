import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from 'reducers/rootReducers';

/* eslint-disable no-underscore-dangle, function-paren-newline */
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    // for devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default store;
