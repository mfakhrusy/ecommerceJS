import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/utils/Loading';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/profile/ProfileContainer'),
  loading() {
    return <Loading />;
  },
});

class LoadableProfile extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableProfile;
