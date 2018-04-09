import { combineReducers } from 'redux';
import isSidebarOpen from 'reducers/homepage/isSidebarOpen';
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
  homeModal,
} from 'reducers/views/home';
import isModalOpen from 'reducers/isModalOpen';

export default combineReducers({
  isSidebarOpen,
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
  homeModal,
  isModalOpen,
});
