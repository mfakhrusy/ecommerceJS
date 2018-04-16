import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';
import BackButton from 'components/views/BackButton';

class Sell extends React.Component {
  render() {
    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Sell"
        nav={<BackButton />}
      >
        <input type="file" accept="image/*;capture=camera" />
      </ViewsContainer>
    );
  }
}

Sell.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Sell);
