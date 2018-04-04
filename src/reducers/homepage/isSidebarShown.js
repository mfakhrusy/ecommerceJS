import { SHOW_SIDEBAR } from 'constants/actionTypes';

const isSidebarShown = (state = false, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return action.isSidebarShown;
    default:
      return state;
  }
};

export default isSidebarShown;
