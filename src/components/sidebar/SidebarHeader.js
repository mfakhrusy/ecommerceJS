import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from 'react-md';
import UserAvatarContainer from 'containers/utils/UserAvatarContainer';

const SidebarHeader = ({ ownuser }) => (
  <Toolbar
    id="sidebar-header"
    className="SidebarHeader"
    colored
    fixed
    nav={<UserAvatarContainer />}
    title={`Hello, ${ownuser.name}`}
  />
);

SidebarHeader.propTypes = {
  ownuser: PropTypes.object.isRequired,
};

export default SidebarHeader;
