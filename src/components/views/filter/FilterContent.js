import React from 'react';
import PropTypes from 'prop-types';
import FilterCategoryContainer from 'containers/views/filter/FilterCategoryContainer';
import FilterPrice from 'components/views/filter/FilterPrice';
// import FilterSort from 'components/views/filter/FilterSort';

class FilterContent extends React.Component {
  render() {
    return (
      <div className="FilterContent">
        <FilterCategoryContainer
          filterCategory={this.props.filter.category}
          setFilterCategory={this.props.setFilterCategory}
        />
        <FilterPrice
          filterPrice={this.props.filter.price}
          setFilterPrice={this.props.setFilterPrice}
        />
        {/* <FilterSort
          filterSort={this.props.filter.sort}
          setFilterSort={this.props.setFilterSort}
        /> */}
      </div>
    );
  }
}

FilterContent.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilterCategory: PropTypes.func.isRequired,
  setFilterPrice: PropTypes.func.isRequired,
  // setFilterSort: PropTypes.func.isRequired,
};

export default FilterContent;
