import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Button } from 'react-md';

class CategorySelector extends Component {
  render() {
    const content = this.props.categories.map(category => (
      <Avatar icon={<Button flat icon primary>{category.mdIcon}</Button>} />
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
