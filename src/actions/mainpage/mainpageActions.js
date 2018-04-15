/* eslint-disable arrow-body-style */
import { SHOW_SIDEBAR } from 'constants/actionTypes';

export const showSidebar = (bool) => {
  return {
    type: SHOW_SIDEBAR,
    isSidebarOpen: bool,
  };
};
