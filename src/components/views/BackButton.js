import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Button } from 'react-md';
// import Button from 'react-md/lib/Buttons';
import ArrowBack from 'assets/svg/arrow_back.svg';
import SVGButtonMD from 'components/utils/SVGButtonMD';

class BackButton extends React.Component {
  render() {
    return (
      // <Button
      //   icon
      //   className={this.props.className}
      //   onClick={() => { this.props.history.push('/'); }}
      // >
      //   arrow_back
      // </Button>
      <SVGButtonMD
        className={this.props.className}
        onClick={() => { this.props.history.push('/'); }}
      >
        <ArrowBack height={30} width={30} />
      </SVGButtonMD>
    );
  }
}

BackButton.propTypes = {
  className: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(BackButton);
