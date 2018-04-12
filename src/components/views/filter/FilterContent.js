import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-md';
import FilterCategoryContainer from 'containers/views/filter/FilterCategoryContainer';
import FilterPrice from 'components/views/filter/FilterPrice';
import FilterSort from 'components/views/filter/FilterSort';

class FilterContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCategory: this.props.filter.category,
      filterPrice: this.props.filter.price,
      filterSort: this.props.filter.sort,
    };
  }

  render() {
    return (
      <div className="FilterContent">
        <FilterCategoryContainer
          filterCategory={this.state.filterCategory}
          setFilterCategory={this.props.setFilterCategory}
        />
        <FilterPrice
          filterPrice={this.state.filterPrice}
          setFilterPrice={this.props.setFilterPrice}
        />
        <FilterSort
          filterSort={this.state.filterSort}
          setFilterSort={this.props.setFilterSort}
        />
      </div>
    );
  }
}

FilterContent.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilterCategory: PropTypes.func.isRequired,
  setFilterPrice: PropTypes.func.isRequired,
  setFilterSort: PropTypes.func.isRequired,
};

export default FilterContent;
