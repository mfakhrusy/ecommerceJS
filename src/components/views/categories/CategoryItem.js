import React from 'react';
import PropTypes from 'prop-types';
import Cell from 'react-md/lib/Grids/Cell';
import Card from 'react-md/lib/Cards/Card';
import SVGButtonMD from 'components/utils/SVGButtonMD';

class CategoryItem extends React.Component {
  render() {
    const { category, onClick } = this.props;
    return (
      <Cell key={category.id} className="CategoryItem" id={`category-category-${category.id}`}>
        <Card
          className="CategoryItemCard"
          id={`category-category-card-${category.id}`}
          onClick={onClick}
        >
          <div>
            {category.label}
          </div>
          {/* <Button
            icon
          >
            {category.mdIcon}
          </Button> */}
          <SVGButtonMD
            key={category.id}
          >
            {category.localMdIcon}
          </SVGButtonMD>
        </Card>
      </Cell>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryItem;
