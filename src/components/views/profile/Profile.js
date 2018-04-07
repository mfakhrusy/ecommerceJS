import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileHeader from 'components/views/profile/ProfileHeader';
import ProfileNavbarTitle from 'components/views/profile/ProfileNavbarTitle';
import ProfileTabMenu from 'components/views/profile/ProfileTabMenu';
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
        <ProfileHeader ownuser={this.props.ownuser} />
        <ProfileTabMenu />
      </ViewsContainer>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.object.isRequired,
  ownuser: PropTypes.object.isRequired,
};

export default withRouter(Profile);
