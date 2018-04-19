import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/notifications/NotificationsContainer'),
  loading() {
    return <div>Loading...</div>;
  },
});

class LoadableNotifications extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableNotifications;
