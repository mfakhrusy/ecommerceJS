import {
  OWNUSER_HAS_ERRORED,
  OWNUSER_IS_LOADING,
  OWNUSER_FETCH_DATA_SUCCESS,
  SET_LOGIN,
} from 'constants/actionTypes';

export const ownuserHasErrored = (state = false, action) => {
  switch (action.type) {
    case OWNUSER_HAS_ERRORED:
      return action.ownuserHasErrored;
    default:
      return state;
  }
};

export const ownuserIsLoading = (state = false, action) => {
  switch (action.type) {
    case OWNUSER_IS_LOADING:
      return action.ownuserIsLoading;
    default:
      return state;
  }
};

export const ownuser = (state = {}, action) => {
  switch (action.type) {
    case OWNUSER_FETCH_DATA_SUCCESS:
      return action.ownuser;
    default:
      return state;
  }
};

export const isLogin = (state = false, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return action.isLogin;
    default:
      return state;
  }
};
