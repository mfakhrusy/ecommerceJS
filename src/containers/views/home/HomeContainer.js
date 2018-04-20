import { connect } from 'react-redux';
import Home from 'components/views/home/Home';
import { chatsFetchData } from 'actions/views/chatsActions';

const mapStateToProps = state => ({
  homeItems: state.homeItems,
  homeHasErrored: state.homeHasErrored,
  homeIsLoading: state.homeIsLoading,
  homeModal: state.homeModal,
  isModalOpen: state.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  chatsfetchData: (url) => {
    dispatch(chatsFetchData(url));
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
