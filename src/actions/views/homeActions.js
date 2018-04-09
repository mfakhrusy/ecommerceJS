/* eslint-disable arrow-body-style */
import {
  HOME_HAS_ERRORED,
  HOME_IS_LOADING,
  HOME_FETCH_DATA_SUCCESS,
} from 'constants/actionTypes';

export const homeHasErrored = (bool) => {
  return {
    type: HOME_HAS_ERRORED,
    homeHasErrored: bool,
  };
};

export const homeIsLoading = (bool) => {
  return {
    type: HOME_IS_LOADING,
    homeIsLoading: bool,
  };
};

export const homeFetchDataSuccess = (homeItems) => {
  return {
    type: HOME_FETCH_DATA_SUCCESS,
    homeItems,
  };
};

export const homeFetchData = (url) => {
  return (dispatch) => {
    dispatch(homeIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(homeIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(home => dispatch(homeFetchDataSuccess(home)))
      .catch(() => dispatch(homeHasErrored(true)));
  };
};
