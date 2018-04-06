import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';

class Notifications extends React.Component {
  render() {
    return (
      <ViewsContainer pathname={this.props.location.pathname}>
        <p>Notifications</p>
      </ViewsContainer>
    );
  }
}

Notifications.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Notifications);
