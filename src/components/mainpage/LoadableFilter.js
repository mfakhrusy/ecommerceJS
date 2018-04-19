import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('components/views/filter/Filter'),
  loading() {
    return <div>Loading...</div>;
  },
});

class LoadableFilter extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableFilter;
