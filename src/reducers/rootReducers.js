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
import {
  notificationsHasErrored,
  notificationsIsLoading,
  notifications,
} from 'reducers/views/notifications';
import {
  chatsHasErrored,
  chatsIsLoading,
  chats,
} from 'reducers/views/chats';
import {
  homeHasErrored,
  homeIsLoading,
  homeItems,
} from 'reducers/views/home';

export default combineReducers({
  isSidebarShown,
  categoriesHasErrored,
  categoriesIsLoading,
  categories,
  ownuserHasErrored,
  ownuserIsLoading,
  ownuser,
  isLogin,
  notificationsHasErrored,
  notificationsIsLoading,
  notifications,
  chatsHasErrored,
  chatsIsLoading,
  chats,
  homeHasErrored,
  homeIsLoading,
  homeItems,
});
