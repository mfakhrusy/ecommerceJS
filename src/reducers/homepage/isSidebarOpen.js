import { SHOW_SIDEBAR } from 'constants/actionTypes';

const isSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return action.isSidebarOpen;
    default:
      return state;
  }
};

export default isSidebarOpen;
