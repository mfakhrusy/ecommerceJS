/* eslint-disable arrow-body-style, arrow-parens */
import { SHOW_SIDEBAR } from 'constants/actionTypes';

export const showSidebar = bool => {
  return {
    type: SHOW_SIDEBAR,
    isSidebarShown: bool,
  };
};
