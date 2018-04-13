import { connect } from 'react-redux';
import HomeModal from 'components/views/home/HomeModal';
import { chatsFetchData } from 'actions/views/chatsActions';

const mapStateToProps = state => ({
  chats: state.chats,
  // chatsHasErrored: state.chatsHasErrored,
  // chatsIsLoading: state.chatsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  chatsfetchData: (url) => {
    dispatch(chatsFetchData(url));
  },
});

const HomeModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeModal);

export default HomeModalContainer;

