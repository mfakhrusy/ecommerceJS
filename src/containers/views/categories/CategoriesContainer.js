import { connect } from 'react-redux';
import Categories from 'components/views/categories/Categories';
import { categoriesFetchData } from 'actions/views/categoriesActions';

const mapStateToProps = state => ({
  categories: state.categories,
  categoriesHasErrored: state.categoriesHasErrored,
  categoriesIsLoading: state.categoriesIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => {
    dispatch(categoriesFetchData(url));
  },
});

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);

export default CategoriesContainer;
