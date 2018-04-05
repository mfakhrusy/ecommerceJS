import { combineReducers } from 'redux';
import isSidebarShown from 'reducers/homepage/isSidebarShown';
import {
  categoriesHasErrored,
  categoriesIsLoading,
  categories,
} from 'reducers/views/categories';

export default combineReducers({
  isSidebarShown,
  categoriesHasErrored,
  categoriesIsLoading,
  categories,
});
