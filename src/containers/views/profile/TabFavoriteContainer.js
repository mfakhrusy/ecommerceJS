import { connect } from 'react-redux';
import TabFavorite from 'components/views/profile/TabFavorite';
import { setProfileModal } from 'actions/views/profileActions';
import { showModal } from 'actions/miscActions';

const mapStateToProps = state => ({
  favoriteItems: state.favoriteItems,
});

const mapDispatchToProps = dispatch => ({
  setProfileModal: (id) => {
    dispatch(setProfileModal(id));
  },
  showModal: (bool) => {
    dispatch(showModal(bool));
  },
});

const TabFavoriteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabFavorite);

export default TabFavoriteContainer;
