/* eslint-disable arrow-body-style */
import {
  NOTIFICATIONS_HAS_ERRORED,
  NOTIFICATIONS_IS_LOADING,
  NOTIFICATIONS_FETCH_DATA_SUCCESS,
} from 'constants/actionTypes';

export const notificationsHasErrored = (bool) => {
  return {
    type: NOTIFICATIONS_HAS_ERRORED,
    notificationsHasErrored: bool,
  };
};

export const notificationsIsLoading = (bool) => {
  return {
    type: NOTIFICATIONS_IS_LOADING,
    notificationsIsLoading: bool,
  };
};

export const notificationsFetchDataSuccess = (notifications) => {
  return {
    type: NOTIFICATIONS_FETCH_DATA_SUCCESS,
    notifications,
  };
};

export const notificationsFetchData = (url) => {
  return (dispatch) => {
    dispatch(notificationsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(notificationsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(notifications => dispatch(notificationsFetchDataSuccess(notifications)))
      .catch(() => dispatch(notificationsHasErrored(true)));
  };
};
