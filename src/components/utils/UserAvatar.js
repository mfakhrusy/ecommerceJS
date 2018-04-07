/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-md';

const UserAvatar = ({ ownuser, className, role }) => {
  return (
    <Avatar
      src={ownuser.avatarUrl}
      className={className}
      role={role}
    />
  );
};

UserAvatar.defaultProps = {
  role: 'presentation',
  className: '',
};

UserAvatar.propTypes = {
  ownuser: PropTypes.object.isRequired,
  className: PropTypes.string,
  role: PropTypes.string,
};

export default UserAvatar;
