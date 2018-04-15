import { connect } from 'react-redux';
import Chats from 'components/views/chats/Chats';
import { chatsFetchData } from 'actions/views/chatsActions';

const mapStateToProps = state => ({
  chats: state.chats,
  chatsHasErrored: state.chatsHasErrored,
  chatsIsLoading: state.chatsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => {
    dispatch(chatsFetchData(url));
  },
});

const ChatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chats);

export default ChatsContainer;
