import React from 'react';
import { Toolbar } from 'react-md';
import UserAvatar from 'components/utils/UserAvatar';

const SidebarHeader = () => (
  <Toolbar
    id="sidebar-header"
    className="SidebarHeader"
    colored
    fixed
    nav={<UserAvatar />}
    title="Hello, User"
  />
);

export default SidebarHeader;
