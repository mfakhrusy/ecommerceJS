import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';
import BackButton from 'components/views/BackButton';
import FilterContent from 'components/views/filter/FilterContent';
import FilterFooterContainer from 'containers/views/filter/FilterFooterContainer';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: {
        category: '',
        price: {
          low: null,
          high: null,
        },
        sort: '',
      },
    };

    this.setFilterCategory = this.setFilterCategory.bind(this);
    this.setFilterPrice = this.setFilterPrice.bind(this);
    this.setFilterSort = this.setFilterSort.bind(this);
  }

  setFilterCategory(category) {
    this.setState({
      filter: {
        ...this.state.filter,
        category,
      },
    });
  }

  setFilterPrice(price) {
    this.setState({
      filter: {
        ...this.state.filter,
        price,
      },
    });
  }

  setFilterSort(sort) {
    this.setState({
      filter: {
        ...this.state.filter,
        sort,
      },
    });
  }

  render() {
    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Filter"
        nav={<BackButton />}
      >
        <React.Fragment>
          <FilterContent
            filter={this.state.filter}
            setFilterCategory={this.setFilterCategory}
            setFilterPrice={this.setFilterPrice}
            setFilterSort={this.setFilterSort}
          />
          <FilterFooterContainer filter={this.state.filter} />
        </React.Fragment>
      </ViewsContainer>
    );
  }
}

Filter.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Filter);
