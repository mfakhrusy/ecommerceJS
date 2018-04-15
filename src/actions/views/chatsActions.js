/* eslint-disable arrow-body-style */
import {
  CHATS_HAS_ERRORED,
  CHATS_IS_LOADING,
  CHATS_FETCH_DATA_SUCCESS,
} from 'constants/actionTypes';

export const chatsHasErrored = (bool) => {
  return {
    type: CHATS_HAS_ERRORED,
    chatsHasErrored: bool,
  };
};

export const chatsIsLoading = (bool) => {
  return {
    type: CHATS_IS_LOADING,
    chatsIsLoading: bool,
  };
};

export const chatsFetchDataSuccess = (chats) => {
  return {
    type: CHATS_FETCH_DATA_SUCCESS,
    chats,
  };
};

export const chatsFetchData = (url) => {
  return (dispatch) => {
    dispatch(chatsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(chatsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(chats => dispatch(chatsFetchDataSuccess(chats)))
      .catch(() => dispatch(chatsHasErrored(true)));
  };
};
