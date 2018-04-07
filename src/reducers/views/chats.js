import {
  CHATS_HAS_ERRORED,
  CHATS_IS_LOADING,
  CHATS_FETCH_DATA_SUCCESS,
} from 'constants/actionTypes';

export const chatsHasErrored = (state = false, action) => {
  switch (action.type) {
    case CHATS_HAS_ERRORED:
      return action.chatsHasErrored;
    default:
      return state;
  }
};

export const chatsIsLoading = (state = false, action) => {
  switch (action.type) {
    case CHATS_IS_LOADING:
      return action.chatsIsLoading;
    default:
      return state;
  }
};

export const chats = (state = [], action) => {
  switch (action.type) {
    case CHATS_FETCH_DATA_SUCCESS:
      return action.chats;
    default:
      return state;
  }
};
