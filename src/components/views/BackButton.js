import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

class BackButton extends React.Component {
  render() {
    return (
      <Button
        icon
        className={this.props.className}
        onClick={() => { this.props.history.push('/'); }}
      >
        arrow_back
      </Button>
    );
  }
}

BackButton.propTypes = {
  className: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(BackButton);
