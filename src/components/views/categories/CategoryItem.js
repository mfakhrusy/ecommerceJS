import React from 'react';
import PropTypes from 'prop-types';

class CategoryContent extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map(item => (
          <div key={item.id}>
            {item.label}
          </div>
        ))}
      </div>
    );
  }
}

CategoryContent.propTypes = {
  // fetchData: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  // location: PropTypes.object.isRequired,
  // categoriesHasErrored: PropTypes.bool.isRequired,
};

export default CategoryContent;
