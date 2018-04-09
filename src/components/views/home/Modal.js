/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ homeItem }) => {
  return (
    <div className="HomeModal">
      <h2>tes {homeItem.name}</h2>
    </div>
  );
};

Modal.propTypes = {
  homeItem: PropTypes.object.isRequired,
};

export default Modal;
