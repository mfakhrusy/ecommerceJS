import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  DialogContainer,
  List,
  ListItem,
  Card,
  CardTitle,
} from 'react-md';

class FilterCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryDialogVisible: false,
      category: {
        label: 'All',
      },
    };

    this.showCategoryDialog = this.showCategoryDialog.bind(this);
    this.hideCategoryDialog = this.hideCategoryDialog.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showCategoryDialog() {
    this.setState({ categoryDialogVisible: true });
  }

  hideCategoryDialog() {
    this.setState({ categoryDialogVisible: false });
  }

  handleClick(category) {
    this.setState({ category });
    this.props.setFilterCategory(category.type);
  }

  render() {
    return (
      <Card className="FilterCategory">
        <CardTitle
          className="FilterCategoryTitle"
          title="Select Category"
        />
        <p>Category: </p>
        <Button
          flat
          primary
          swapTheming
          onClick={this.showCategoryDialog}
        >
          {this.state.category.label}
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
                onClick={() => { this.handleClick(category); }}
              />
            ))}
          </List>
        </DialogContainer>
      </Card>
    );
  }
}

FilterCategory.propTypes = {
  // FilterCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilterCategory: PropTypes.func.isRequired,
};

export default FilterCategory;
