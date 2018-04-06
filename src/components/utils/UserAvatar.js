/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-md';

const UserAvatar = ({ ownuser }) => {
  return (
    <React.Fragment>
      <Avatar src={ownuser.avatarUrl} />
    </React.Fragment>
  );
};

UserAvatar.propTypes = {
  ownuser: PropTypes.object.isRequired,
};

export default UserAvatar;
