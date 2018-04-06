import { combineReducers } from 'redux';
import isSidebarShown from 'reducers/homepage/isSidebarShown';
import {
  categoriesHasErrored,
  categoriesIsLoading,
  categories,
} from 'reducers/views/categories';
import {
  ownuserHasErrored,
  ownuserIsLoading,
  ownuser,
  isLogin,
} from 'reducers/views/login';

export default combineReducers({
  isSidebarShown,
  categoriesHasErrored,
  categoriesIsLoading,
  categories,
  ownuserHasErrored,
  ownuserIsLoading,
  ownuser,
  isLogin,
});
