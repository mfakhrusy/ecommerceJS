import React from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.categories.map(item => (
          <div key={item.id}>
            {item.label}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

CategoryItem.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryItem;
