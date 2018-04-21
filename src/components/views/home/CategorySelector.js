/* eslint-disable arrow-parens, arrow-body-style, global-require, import/no-dynamic-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Card, Button } from 'react-md';
import Card from 'react-md/lib/Cards';
// import Button from 'react-md/lib/Buttons';
import categories from 'assets/js/categories';
import SVGButtonMD from 'components/utils/SVGButtonMD';

class CategorySelector extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(category) {
    this.props.setFilterCategories(category);
  }

  render() {
    // const content = this.props.categories.map(category => {
    const content = categories.map(category => {
      return (
        // <Butto
        //   key={category.id}
        //   className="CategorySelectorItem"
        //   id="category-selector-item"
        //   icon
        //   primary
        //   // disabled={this.props.filterCategory === category}
        //   onClick={() => { this.handleClick(category.type); }}
        // >
        //   {category.mdIcon}
        // </Button>
        <SVGButtonMD
          key={category.id}
          className="CategorySelectorItem"
          id="category-selector-item"
          onClick={() => { this.handleClick(category.type); }}
        >
          {category.localMdIcon}
        </SVGButtonMD>
      );
    });

    return (
      <Card className="CategorySelector">
        {content}
      </Card>
    );
  }
}

CategorySelector.propTypes = {
  // categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilterCategories: PropTypes.func.isRequired,
  // filterCategory: PropTypes.string.isRequired,
};

export default CategorySelector;
