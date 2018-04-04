import { createStore } from 'redux';
import rootReducers from 'reducers/rootReducers';

export default () => createStore(rootReducers);
