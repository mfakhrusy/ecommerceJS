import {
  NOTIFICATIONS_HAS_ERRORED,
  NOTIFICATIONS_IS_LOADING,
  NOTIFICATIONS_FETCH_DATA_SUCCESS,
} from 'constants/actionTypes';

export const notificationsHasErrored = (state = false, action) => {
  switch (action.type) {
    case NOTIFICATIONS_HAS_ERRORED:
      return action.notificationsHasErrored;
    default:
      return state;
  }
};

export const notificationsIsLoading = (state = false, action) => {
  switch (action.type) {
    case NOTIFICATIONS_IS_LOADING:
      return action.notificationsIsLoading;
    default:
      return state;
  }
};

export const notifications = (state = [], action) => {
  switch (action.type) {
    case NOTIFICATIONS_FETCH_DATA_SUCCESS:
      return action.notifications;
    default:
      return state;
  }
};
