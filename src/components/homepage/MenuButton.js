/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const MenuButton = ({ className, onClick, isSidebarShown }) => {
  // console.log(isSidebarShown);
  return (
    <Button
      icon
      className={className}
      onClick={() => { onClick(!isSidebarShown); }}
    >
      menu
    </Button>
  );
};

MenuButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSidebarShown: PropTypes.bool.isRequired,
};

export default MenuButton;
