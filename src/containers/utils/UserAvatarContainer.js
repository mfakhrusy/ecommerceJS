import { connect } from 'react-redux';
import UserAvatar from 'components/utils/UserAvatar';

const mapStateToProps = state => ({
  ownuser: state.ownuser,
});

const UserAvatarContainer = connect(
  mapStateToProps,
)(UserAvatar);

export default UserAvatarContainer;
