import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('components/views/sell/Sell'),
  loading() {
    return <div>Loading...</div>;
  },
});

class LoadableSell extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableSell;
