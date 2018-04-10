import {
  SHOW_MODAL,
  ADD_FAVORITE_ITEM,
  DELETE_FAVORITE_ITEM,
} from 'constants/actionTypes';

export const isModalOpen = (state = false, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.isModalOpen;
    default:
      return state;
  }
};

export const favoriteItems = (state = [], action) => {
  // console.log(action.type);
  switch (action.type) {
    case ADD_FAVORITE_ITEM:
      return [...state, action.item];
    case DELETE_FAVORITE_ITEM:
      // state.slice() -> copy the array (so it's not mutating)
      // filter -> filter the array according to action.item.id
      return state.slice().filter(item => item.id !== action.item.id);
    default:
      return state;
  }
};
