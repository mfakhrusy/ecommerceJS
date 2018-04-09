import { SHOW_MODAL } from 'constants/actionTypes';

export const showModal = bool => ({
  type: SHOW_MODAL,
  isModalOpen: bool,
});
