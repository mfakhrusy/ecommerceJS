import { connect } from 'react-redux';
import TabFavorite from 'components/views/profile/TabFavorite';

const mapStateToProps = state => ({
  favoriteItems: state.favoriteItems,
});

const TabFavoriteContainer = connect(
  mapStateToProps,
)(TabFavorite);

export default TabFavoriteContainer;
