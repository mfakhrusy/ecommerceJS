import {
  SHOW_MODAL,
  ADD_FAVORITE_ITEM,
  DELETE_FAVORITE_ITEM,
} from 'constants/actionTypes';

export const showModal = bool => ({
  type: SHOW_MODAL,
  isModalOpen: bool,
});

export const addFavoriteItem = item => ({
  type: ADD_FAVORITE_ITEM,
  item,
});

export const deleteFavoriteItem = item => ({
  type: DELETE_FAVORITE_ITEM,
  item,
});
