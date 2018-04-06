import { connect } from 'react-redux';
import Profile from 'components/views/profile/Profile';

const mapStateToProps = state => ({
  ownuser: state.ownuser,
});

const ProfileContainer = connect(
  mapStateToProps,
)(Profile);

export default ProfileContainer;
