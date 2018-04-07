import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileContent from 'components/views/profile/ProfileContent';
import ProfileNavbarTitle from 'components/views/profile/ProfileNavbarTitle';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';

class Profile extends React.Component {
  render() {
    return (
      <ViewsContainer
        fixed
        pathname={this.props.location.pathname}
        className="Profile"
        nav={<BackButton />}
        title={<ProfileNavbarTitle ownuser={this.props.ownuser} />}
      >
        <ProfileContent />
      </ViewsContainer>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.object.isRequired,
  ownuser: PropTypes.object.isRequired,
};

export default withRouter(Profile);
