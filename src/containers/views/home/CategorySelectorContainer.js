import { connect } from 'react-redux';
import CategorySelector from 'components/views/home/CategorySelector';

const mapStateToProps = state => ({
  categories: state.categories,
});

const CategorySelectorContainer = connect(
  mapStateToProps,
)(CategorySelector);

export default CategorySelectorContainer;
