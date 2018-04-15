import { SHOW_MODAL } from 'constants/actionTypes';

const isModalOpen = (state = false, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.isModalOpen;
    default:
      return state;
  }
};

export default isModalOpen;
