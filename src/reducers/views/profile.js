import { SET_PROFILE_MODAL } from 'constants/actionTypes';

// an object
export const profileModal = (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE_MODAL:
      return action.profileModal;
    default:
      return state;
  }
};
