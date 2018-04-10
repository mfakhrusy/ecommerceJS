import { SET_PROFILE_MODAL } from 'constants/actionTypes';

// will inject the favoriteItem (not the id like homeModal)
// to the action -> later to the Profile container
// favoriteItem is an object containing all of the item info
export const setProfileModal = favoriteItem => ({
  type: SET_PROFILE_MODAL,
  profileModal: favoriteItem,
});
