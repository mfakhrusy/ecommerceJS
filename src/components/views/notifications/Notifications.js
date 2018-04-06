import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';
import BackButton from 'components/views/BackButton';

class Notifications extends React.Component {
  render() {
    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        fixed
        className="Notifications"
        nav={<BackButton />}
      >
        <p>Notifications</p>
      </ViewsContainer>
    );
  }
}

Notifications.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Notifications);
