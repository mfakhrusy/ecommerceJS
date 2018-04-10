import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid } from 'react-md';
import CategoryItem from 'components/views/categories/CategoryItem';

class CategoryContent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(category) {
    this.props.setFilterCategories(category);
    this.props.showSidebar(false);
    this.props.history.push('/');
  }
  render() {
    const { categories } = this.props;
    return (
      <Grid containers="categories" className="CategoryContent" id="category-content">
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            onClick={() => { this.handleClick(category.type); }}
          />
        ))}
      </Grid>
    );
  }
}
CategoryContent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilterCategories: PropTypes.func.isRequired,
  showSidebar: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(CategoryContent);
