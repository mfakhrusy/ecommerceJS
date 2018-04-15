import { connect } from 'react-redux';
import FilterFooter from 'components/views/filter/FilterFooter';
import { setFilterCategories } from 'actions/views/categoriesActions';
import { setFilterPrice } from 'actions/views/filterActions';

const mapDispatchToProps = dispatch => ({
  setFilterCategories: (category) => {
    dispatch(setFilterCategories(category));
  },
  setFilterPrice: (price) => {
    dispatch(setFilterPrice(price));
  },
  // setFilterSort: (sort) => {
  //   dispatch(setFilterSort(sort));
  // },
});

const FilterFooterContainer = connect(
  null,
  mapDispatchToProps,
)(FilterFooter);

export default FilterFooterContainer;

