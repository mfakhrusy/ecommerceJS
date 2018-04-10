import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const ModalCloseButton = ({ onClick, isModalOpen }) => (
  <div className="ModalCloseButton">
    <Button
      icon
      onClick={() => { onClick(!isModalOpen); }}
    >
      close
    </Button>
  </div>
);

ModalCloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default ModalCloseButton;
