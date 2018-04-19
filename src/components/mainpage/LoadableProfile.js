import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/profile/ProfileContainer'),
  loading() {
    return <div>Loading...</div>;
  },
});

class LoadableProfile extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableProfile;
