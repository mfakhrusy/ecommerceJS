import { connect } from 'react-redux';
import FilterFooter from 'components/views/filter/FilterFooter';
import { setFilterCategories } from 'actions/views/categoriesActions';

const mapDispatchToProps = dispatch => ({
  setFilterCategories: (category) => {
    dispatch(setFilterCategories(category));
  },
});

const FilterFooterContainer = connect(
  null,
  mapDispatchToProps,
)(FilterFooter);

export default FilterFooterContainer;

