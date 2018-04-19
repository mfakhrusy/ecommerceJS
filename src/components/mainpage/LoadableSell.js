import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/utils/Loading';

const LoadableComponent = Loadable({
  loader: () => import('components/views/sell/Sell'),
  loading() {
    return <Loading />;
  },
});

class LoadableSell extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableSell;
