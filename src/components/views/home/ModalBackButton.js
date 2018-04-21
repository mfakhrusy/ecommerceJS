import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-md';
// import Button from 'react-md/lib/Buttons';
import ArrowBack from 'assets/svg/arrow_back.svg';
import SVGButtonMD from 'components/utils/SVGButtonMD';

class ModalBackButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(bool) {
    if (this.props.descriptionIsOpen) {
      this.props.showDescription(bool);
    // } else if (this.props.shareIsOpen) {
    // this.props.showShare(bool);
    }
  }

  render() {
    return (
      <div className="ModalBackButton">
        {/* <Button
          icon
          onClick={() => { this.handleClick(false); }}
        >
          arrow_back
        </Button> */}
        <SVGButtonMD
          onClick={() => { this.handleClick(false); }}
        >
          <ArrowBack fill="white" height={30} width={30} />
        </SVGButtonMD>
      </div>
    );
  }
}

ModalBackButton.propTypes = {
  showDescription: PropTypes.func.isRequired,
  // showShare: PropTypes.func.isRequired,
  descriptionIsOpen: PropTypes.bool.isRequired,
  // shareIsOpen: PropTypes.bool.isRequired,
};

export default ModalBackButton;
