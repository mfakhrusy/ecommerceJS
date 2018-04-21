import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-md';
// import Button from 'react-md/lib/Buttons';
import Close from 'assets/svg/close.svg';
import SVGButtonMD from 'components/utils/SVGButtonMD';

const ModalCloseButton = ({ onClick, isModalOpen }) => (
  <div className="ModalCloseButton">
    {/* <Button
      icon
      onClick={() => { onClick(!isModalOpen); }}
    >
      close
    </Button> */}
    <SVGButtonMD
      // className={menuButtonClassNames}
      // onClick={this.handleClick}
      // onClick={() => { this.props.showDescription(true); }}
      onClick={() => { onClick(!isModalOpen); }}
    >
      <Close fill="white" height={30} width={30} />
    </SVGButtonMD>
  </div>
);

ModalCloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default ModalCloseButton;
