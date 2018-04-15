import { connect } from 'react-redux';
import ModalLoveButton from 'components/views/home/ModalLoveButton';
import {
  addFavoriteItem,
  deleteFavoriteItem,
} from 'actions/miscActions';

const mapStateToProps = state => ({
  favoriteItems: state.favoriteItems,
});

const mapDispatchToProps = dispatch => ({
  addFavoriteItem: (homeItem) => {
    dispatch(addFavoriteItem(homeItem));
  },
  deleteFavoriteItem: (homeItem) => {
    dispatch(deleteFavoriteItem(homeItem));
  },
});

const ModalLoveButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLoveButton);

export default ModalLoveButtonContainer;
