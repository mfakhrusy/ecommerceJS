import {
  CHATS_HAS_ERRORED,
  CHATS_IS_LOADING,
  CHATS_FETCH_DATA_SUCCESS,
  ADD_COMMENT_TO_CHAT,
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
    case ADD_COMMENT_TO_CHAT: {
      const chatId = Number(state[state.length - 1].id) + 1;
      return [...state, {
        id: chatId,
        createdAt: action.createdAt,
        name: action.username,
        avatarUrl: action.avatarUrl,
        imageUrl: action.imageUrl,
        imageDescription: action.comment,
        type: 'buy',
      }];
    }
    default:
      return state;
  }
};
