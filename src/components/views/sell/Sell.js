import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';

class Sell extends React.Component {
  render() {
    return (
      <ViewsContainer pathname={this.props.location.pathname}>
        <p>Sell</p>
      </ViewsContainer>
    );
  }
}

Sell.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Sell);
