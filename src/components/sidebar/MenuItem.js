import React from 'react';
import { ListItem, FontIcon } from 'react-md';
import PropTypes from 'prop-types';

const MenuItem = ({ label, mdIcon }) => (
  <ListItem
    leftIcon={<FontIcon>{mdIcon}</FontIcon>}
    primaryText={label}
  />
);

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  mdIcon: PropTypes.string.isRequired,
};

export default MenuItem;
