import { connect } from 'react-redux';
import CategoryContent from 'components/views/categories/CategoryContent';
import { setFilterCategories } from 'actions/views/categoriesActions';
import { showSidebar } from 'actions/mainpage/mainpageActions';

const mapDispatchToProps = dispatch => ({
  setFilterCategories: (category) => {
    dispatch(setFilterCategories(category));
  },
  showSidebar: (bool) => {
    dispatch(showSidebar(bool));
  },
});

const CategoryContentContainer = connect(
  null,
  mapDispatchToProps,
)(CategoryContent);

export default CategoryContentContainer;
