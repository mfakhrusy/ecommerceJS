import React from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer, List, ListItem } from 'react-md';

class FilterCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryDialogVisible: false,
    };

    this.showCategoryDialog = this.showCategoryDialog.bind(this);
    this.hideCategoryDialog = this.hideCategoryDialog.bind(this);
  }

  showCategoryDialog() {
    this.setState({ categoryDialogVisible: true });
  }

  hideCategoryDialog() {
    this.setState({ categoryDialogVisible: false });
  }

  render() {
    return (
      <div className="FilterCategory">
        <h4>Categories</h4>
        <Button
          flat
          primary
          swapTheming
          onClick={this.showCategoryDialog}
        >
          Categories
        </Button>
        <DialogContainer
          id="filter-category-dialog"
          visible={this.state.categoryDialogVisible}
          onHide={this.hideCategoryDialog}
          title="Select Category"
        >
          <List onClick={this.hideCategoryDialog}>
            {this.props.categories.map(category => (
              <ListItem
                key={category.id}
                primaryText={category.label}
                onClick={() => { this.props.setFilterCategory(category.type); }}
              />
            ))}
          </List>
        </DialogContainer>
      </div>
    );
  }
}

FilterCategory.propTypes = {
  // FilterCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilterCategory: PropTypes.func.isRequired,
};

export default FilterCategory;
