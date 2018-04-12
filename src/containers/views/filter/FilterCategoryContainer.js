import { connect } from 'react-redux';
import FilterCategory from 'components/views/filter/FilterCategory';

const mapStateToProps = state => ({
  categories: state.categories,
});

// const mapDispatchToProps = dispatch => ({
//   fetchData: (url) => {
//     dispatch(categoriesFetchData(url));
//   },
// });

const FilterCategoryContainer = connect(
  mapStateToProps,
)(FilterCategory);

export default FilterCategoryContainer;
