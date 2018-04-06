import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';

class Profile extends React.Component {
  render() {
    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        className="Profile"
        nav={<BackButton />}
      >
        <p>{this.props.ownuser.name}</p>
      </ViewsContainer>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.object.isRequired,
  ownuser: PropTypes.object.isRequired,
};

export default withRouter(Profile);
