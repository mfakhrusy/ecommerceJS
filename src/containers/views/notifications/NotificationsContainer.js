import { connect } from 'react-redux';
import Notifications from 'components/views/notifications/Notifications';
import { notificationsFetchData } from 'actions/views/notificationsActions';

const mapStateToProps = state => ({
  notifications: state.notifications,
  notificationsHasErrored: state.notificationsHasErrored,
  notificationsIsLoading: state.notificationsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => {
    dispatch(notificationsFetchData(url));
  },
});

const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications);

export default NotificationsContainer;
