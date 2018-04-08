import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-md';

class CategorySelector extends Component {
  render() {
    const content = this.props.categories.map(category => (
      <Button
        icon
        primary
        forceIconSize="50px"
        forceIconFontSize
        className="CategorySelectorItem"
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
};

export default CategorySelector;
