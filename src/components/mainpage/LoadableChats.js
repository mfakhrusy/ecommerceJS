import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/utils/Loading';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/chats/ChatsContainer'),
  loading() {
    return <Loading />;
  },
});

class LoadableChats extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableChats;

