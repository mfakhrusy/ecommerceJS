import { createStore } from 'redux';
import rootReducers from 'reducers/rootReducers';

/* eslint-disable no-underscore-dangle, function-paren-newline */
const store = createStore(
  rootReducers,
  // for devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
