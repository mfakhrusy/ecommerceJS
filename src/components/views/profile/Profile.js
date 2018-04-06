import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';

class Profile extends React.Component {
  render() {
    return (
      <ViewsContainer pathname={this.props.location.pathname}>
        <p>Profile</p>
      </ViewsContainer>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Profile);
