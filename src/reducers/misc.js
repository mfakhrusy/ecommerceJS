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
      // get ID of the action
      // const itemId = action.item.id;
      // first, copy state with slice(), so we're not mutating the state.
      // then, delete one element with splice()
      // splice first param: location of element
      // splice second param: how many element to be deleted
      return state.slice().splice(action.item.id, 1);
    default:
      return state;
  }
};
