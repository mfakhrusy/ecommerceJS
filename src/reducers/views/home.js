import {
  HOME_HAS_ERRORED,
  HOME_IS_LOADING,
  HOME_FETCH_DATA_SUCCESS,
  SET_HOME_MODAL,
  SET_HOME_SEARCH,
} from 'constants/actionTypes';

export const homeHasErrored = (state = false, action) => {
  switch (action.type) {
    case HOME_HAS_ERRORED:
      return action.homeHasErrored;
    default:
      return state;
  }
};

export const homeIsLoading = (state = false, action) => {
  switch (action.type) {
    case HOME_IS_LOADING:
      return action.homeIsLoading;
    default:
      return state;
  }
};

export const homeItems = (state = [], action) => {
  switch (action.type) {
    case HOME_FETCH_DATA_SUCCESS:
      return action.homeItems;
    default:
      return state;
  }
};

// todo change the state to homeItem object not the id/index
export const homeModal = (state = '0', action) => {
  switch (action.type) {
    case SET_HOME_MODAL:
      return action.homeModal;
    default:
      return state;
  }
};

export const homeSearchText = (state = '', action) => {
  switch (action.type) {
    case SET_HOME_SEARCH:
      return action.homeSearchText;
    default:
      return state;
  }
};
