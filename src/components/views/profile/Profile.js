import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileContent from 'components/views/profile/ProfileContent';
import ProfileNavbarTitle from 'components/views/profile/ProfileNavbarTitle';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';
import ProfileModal from 'components/views/profile/ProfileModal';

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ViewsContainer
          fixed
          pathname={this.props.location.pathname}
          className="Profile"
          nav={<BackButton />}
          title={<ProfileNavbarTitle ownuser={this.props.ownuser} />}
        >
          <ProfileContent />
        </ViewsContainer>
        {this.props.isModalOpen ? <ProfileModal favoriteItem={this.props.profileModal} /> : ''}
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.object.isRequired,
  ownuser: PropTypes.object.isRequired,
  profileModal: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  // favoriteItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  // homeModal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default withRouter(Profile);
