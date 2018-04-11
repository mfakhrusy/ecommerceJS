import { connect } from 'react-redux';
import Search from 'components/mainpage/Search';
import { setHomeSearch } from 'actions/views/homeActions';

// const mapStateToProps = state => ({
//   homeSearchText: state.homeSearchText,
// });

const mapDispatchToProps = dispatch => ({
  setHomeSearch: (text) => {
    dispatch(setHomeSearch(text));
  },
});

const SearchContainer = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
