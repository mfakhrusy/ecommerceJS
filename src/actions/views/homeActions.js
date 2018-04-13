import {
  HOME_HAS_ERRORED,
  HOME_IS_LOADING,
  HOME_FETCH_DATA_SUCCESS,
  SET_HOME_MODAL,
  SET_HOME_SEARCH,
  ADD_COMMENT_TO_CHAT,
} from 'constants/actionTypes';

export const homeHasErrored = bool => ({
  type: HOME_HAS_ERRORED,
  homeHasErrored: bool,
});

export const homeIsLoading = bool => ({
  type: HOME_IS_LOADING,
  homeIsLoading: bool,
});

export const homeFetchDataSuccess = homeItems => ({
  type: HOME_FETCH_DATA_SUCCESS,
  homeItems,
});

export const homeFetchData = url => ((dispatch) => {
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
});

export const setHomeModal = id => ({
  type: SET_HOME_MODAL,
  homeModal: id,
});

export const setHomeSearch = text => ({
  type: SET_HOME_SEARCH,
  homeSearchText: text,
});

export const addCommentToChat = (id, username, createdAt, avatarUrl, imageUrl, comment) => ({
  type: ADD_COMMENT_TO_CHAT,
  username,
  createdAt,
  avatarUrl,
  imageUrl,
  comment,
});
