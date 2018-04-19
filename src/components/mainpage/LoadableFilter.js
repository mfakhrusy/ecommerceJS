import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/utils/Loading';

const LoadableComponent = Loadable({
  loader: () => import('components/views/filter/Filter'),
  loading() {
    return <Loading />;
  },
});

class LoadableFilter extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableFilter;
