import { connect } from 'react-redux';
import HomeContent from 'components/views/home/HomeContent';
import { setHomeModal } from 'actions/views/homeActions';
import { showModal } from 'actions/globalActions';

const mapStateToProps = state => ({
  homeModal: state.homeModal,
});

const mapDispatchToProps = dispatch => ({
  setHomeModal: (id) => {
    dispatch(setHomeModal(id));
  },
  showModal: (bool) => {
    dispatch(showModal(bool));
  },
});

const HomeContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContent);

export default HomeContentContainer;
