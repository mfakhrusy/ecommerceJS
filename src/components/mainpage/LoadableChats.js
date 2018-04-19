import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/chats/ChatsContainer'),
  loading() {
    return <div>Loading...</div>;
  },
});

class LoadableChats extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableChats;

