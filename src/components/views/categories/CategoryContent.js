import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell, Card, Button } from 'react-md';

const CategoryContent = ({ categories }) => (
  <Grid containers="categories" className="CategoryContent" id="category-content">
    {categories.map(item => (
      <Cell key={item.id} className="CategoryItem" id={`category-item-${item.id}`}>
        <Card className="CategoryItemCard" id={`category-item-card-${item.id}`}>
          <Button
            icon
            forceIconSize={50}
            forceIconFontSize
          >
            {item.mdIcon}
          </Button>
          <p>{item.label}</p>
        </Card>
      </Cell>
    ))}
  </Grid>
);

CategoryContent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryContent;
