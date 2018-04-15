import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { CircularProgress } from 'react-md';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import urls from 'constants/urls';
import NotificationContent from 'components/views/notifications/NotificationContent';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';

const accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'notifications-loading-progress',
};

class Notifications extends React.Component {
  componentDidMount() {
    this.props.fetchData(urls.notifications.url);
  }

  render() {
    let content = null;

    if (this.props.notificationsHasErrored) {
      content = <h1>Notifications Display Error!</h1>;
    } else if (this.props.notificationsIsLoading) {
      accessibilityProps['aria-busy'] = false;
      content = <CircularProgress id={accessibilityProps['aria-describedby']} />;
    } else {
      content = <NotificationContent notifications={this.props.notifications} />;
    }

    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Notifications"
        nav={<BackButton />}
      >
        {content}
      </ViewsContainer>
    );
  }
}

Notifications.propTypes = {
  fetchData: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
  notificationsHasErrored: PropTypes.bool.isRequired,
  notificationsIsLoading: PropTypes.bool.isRequired,
};

export default withRouter(Notifications);
