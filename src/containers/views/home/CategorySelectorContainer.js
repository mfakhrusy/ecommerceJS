import { connect } from 'react-redux';
import CategorySelector from 'components/views/home/CategorySelector';
import { setFilterCategories } from 'actions/views/categoriesActions';

const mapStateToProps = state => ({
  categories: state.categories,
  // filterCategory: state.filterCategory,
});

const mapDispatchToProps = dispatch => ({
  setFilterCategories: (category) => {
    dispatch(setFilterCategories(category));
  },
});

const CategorySelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategorySelector);

export default CategorySelectorContainer;
