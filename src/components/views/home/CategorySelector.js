import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-md';

class CategorySelector extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(category) {
    this.props.setFilterCategories(category);
  }

  render() {
    const content = this.props.categories.map(category => (
      <Button
        key={category.id}
        className="CategorySelectorItem"
        id="category-selector-item"
        icon
        primary
        // disabled={this.props.filterCategory === category}
        onClick={() => { this.handleClick(category.type); }}
      >
        {category.mdIcon}
      </Button>
    ));

    return (
      <Card className="CategorySelector">
        {content}
      </Card>
    );
  }
}

CategorySelector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilterCategories: PropTypes.func.isRequired,
  // filterCategory: PropTypes.string.isRequired,
};

export default CategorySelector;
