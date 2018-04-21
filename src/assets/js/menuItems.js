import React from 'react';
import Home from 'assets/svg/home.svg';
import CameraAlt from 'assets/svg/camera_alt.svg';
import Chat from 'assets/svg/chat.svg';
import Notifications from 'assets/svg/notifications.svg';
import GridOn from 'assets/svg/grid_on.svg';
import FilterList from 'assets/svg/filter_list.svg';
import AccountBox from 'assets/svg/account_box.svg';

const width = 24;
const height = 24;

export default [
  {
    id: '1',
    label: 'Browse',
    mdIcon: 'home',
    localMdIcon: <Home
      width={width}
      height={height}
      // className="dashboard-logo"
    />,
    route: '/',
    dropdown: false,
  },
  {
    id: '2',
    label: 'Sell',
    mdIcon: 'camera_alt',
    localMdIcon: <CameraAlt
      width={width}
      height={height}
      // className="dashboard-logo"
    />,
    route: '/sell',
    dropdown: false,
  },
  {
    id: '3',
    label: 'Chat',
    mdIcon: 'chat',
    localMdIcon: <Chat
      width={width}
      height={height}
      // className="dashboard-logo"
    />,
    route: '/chat',
    dropdown: false,
  },
  {
    id: '4',
    label: 'Notifications',
    mdIcon: 'notifications',
    localMdIcon: <Notifications
      width={width}
      height={height}
      // className="dashboard-logo"
    />,
    route: '/notifications',
    dropdown: false,
  },
  {
    id: '5',
    label: 'Categories',
    mdIcon: 'grid_on',
    localMdIcon: <GridOn
      width={width}
      height={height}
      // className="dashboard-logo"
    />,
    route: '/categories',
    dropdown: false,
  },
  {
    id: '6',
    label: 'Filter',
    mdIcon: 'filter_list',
    localMdIcon: <FilterList
      width={width}
      height={height}
      // className="dashboard-logo"
    />,
    route: '/filter',
    dropdown: false,
  },
  {
    id: '7',
    label: 'Profile',
    mdIcon: 'account_box',
    localMdIcon: <AccountBox
      width={width}
      height={height}
      // className="dashboard-logo"
    />,
    route: '/profile',
    dropdown: false,
  },
  // {
  //   id: '7',
  //   label: 'Help',
  //   mdIcon: 'help',
  //   route: '/help',
  //   dropdown: false,
  // },

];
