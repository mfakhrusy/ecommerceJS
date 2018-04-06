import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell, Card, Button } from 'react-md';
// import CategoryItem from 'components/views/categories/CategoryItem';

class CategoryContent extends React.Component {
  render() {
    return (
      <Grid containers="categories" className="CategoryContent" id="category-content">
        {this.props.categories.map(item => (
          <Cell key={item.id} className="CategoryItem" id="category-item">
            <Card className="CategoryItemCard" id="category-item-card">
              <Button icon>{item.mdIcon}</Button>
              {item.label}
            </Card>
          </Cell>
        ))}
      </Grid>
    );
  }
}

CategoryContent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryContent;
