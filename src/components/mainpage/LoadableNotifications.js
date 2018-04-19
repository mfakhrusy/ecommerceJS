import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/utils/Loading';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/notifications/NotificationsContainer'),
  loading() {
    return <Loading />;
  },
});

class LoadableNotifications extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableNotifications;
