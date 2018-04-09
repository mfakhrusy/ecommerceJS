import { connect } from 'react-redux';
import Home from 'components/views/home/Home';
import { homeFetchData } from 'actions/views/homeActions';

const mapStateToProps = state => ({
  homeItems: state.homeItems,
  homeHasErrored: state.homeHasErrored,
  homeIsLoading: state.homeIsLoading,
  homeModal: state.homeModal,
  isModalOpen: state.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => {
    dispatch(homeFetchData(url));
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
