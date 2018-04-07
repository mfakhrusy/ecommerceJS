import React from 'react';
import PropTypes from 'prop-types';

const ProfileNavbarTitle = ({ ownuser }) => (
  <h2>{`${ownuser.name}, ${ownuser.location}`}</h2>
);

ProfileNavbarTitle.propTypes = {
  ownuser: PropTypes.object.isRequired,
};

export default ProfileNavbarTitle;
