/* eslint-disable arrow-body-style */
import {
  OWNUSER_HAS_ERRORED,
  OWNUSER_IS_LOADING,
  OWNUSER_FETCH_DATA_SUCCESS,
  SET_LOGIN,
} from 'constants/actionTypes';

export const ownuserHasErrored = (bool) => {
  return {
    type: OWNUSER_HAS_ERRORED,
    ownuserHasErrored: bool,
  };
};

export const ownuserIsLoading = (bool) => {
  return {
    type: OWNUSER_IS_LOADING,
    ownuserIsLoading: bool,
  };
};

export const ownuserFetchDataSuccess = (ownuser) => {
  return {
    type: OWNUSER_FETCH_DATA_SUCCESS,
    ownuser,
  };
};

export const setLogin = (bool) => {
  return {
    type: SET_LOGIN,
    isLogin: bool,
  };
};

export const ownuserFetchData = (url) => {
  return (dispatch) => {
    dispatch(ownuserIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(ownuserIsLoading(false));
        dispatch(setLogin(true));

        return response;
      })
      .then((response) => {
        return (response.json());
      })
      .then((ownuser) => {
        return (
          // ownuser[0] -> because ownuser only has 1 data (and will be kept like that)
          // so let's just strip out the array so the dispatched state is object
          dispatch(ownuserFetchDataSuccess(ownuser[0]))
        );
      })
      .catch(() => {
        return (
          dispatch(ownuserHasErrored(true))
        );
      });
  };
};
