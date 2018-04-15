import { connect } from 'react-redux';
import Profile from 'components/views/profile/Profile';

const mapStateToProps = state => ({
  ownuser: state.ownuser,
  profileModal: state.profileModal,
  isModalOpen: state.isModalOpen,
});

const ProfileContainer = connect(
  mapStateToProps,
)(Profile);

export default ProfileContainer;
