/* eslint-disable arrow-parens, arrow-body-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-md/lib/Cards';
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
          id={`category-selector-item-${category.mdIcon}`}
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
  setFilterCategories: PropTypes.func.isRequired,
};

export default CategorySelector;
