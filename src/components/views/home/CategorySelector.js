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
        icon
        primary
        className="CategorySelectorItem"
        key={category.id}
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
};

export default CategorySelector;
