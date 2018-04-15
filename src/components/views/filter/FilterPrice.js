import React from 'react';
import PropTypes from 'prop-types';
// import {
//   Card,
//   CardTitle,
// } from 'react-md';
import { Card, CardTitle } from 'react-md/lib/Cards';

class FilterPrice extends React.Component {
  constructor() {
    super();
    this.state = {
      filterMinPrice: '',
      filterMaxPrice: '',
    };

    this.setFilterMinPrice = this.setFilterMinPrice.bind(this);
    this.setFilterMaxPrice = this.setFilterMaxPrice.bind(this);
  }

  setFilterMinPrice(event) {
    this.setState({ filterMinPrice: event.target.value });
    this.props.setFilterPrice({
      ...this.props.filterPrice,
      minPrice: Number(event.target.value),
    });
  }

  setFilterMaxPrice(event) {
    this.setState({ filterMaxPrice: event.target.value });
    this.props.setFilterPrice({
      ...this.props.filterPrice,
      maxPrice: Number(event.target.value),
    });
  }

  render() {
    // console.log(this.props.filterPrice);
    return (
      <Card className="FilterPrice">
        <CardTitle
          className="FilterPriceTitle"
          title="Select Price Range"
        />
        <div className="FilterPriceContent">
          <div>
            <p>From: </p>
            <input
              name="comment-input"
              type="text"
              placeholder="From"
              onChange={(event) => { this.setFilterMinPrice(event); }}
              value={this.state.filterMinPrice}
            />
          </div>
          <div>
            <p>Until: </p>
            <input
              name="comment-input"
              type="text"
              placeholder="Until"
              onChange={(event) => { this.setFilterMaxPrice(event); }}
              value={this.state.filterMaxPrice}
            />
          </div>
        </div>
      </Card>
    );
  }
}

FilterPrice.propTypes = {
  setFilterPrice: PropTypes.func.isRequired,
  filterPrice: PropTypes.object.isRequired,
};

export default FilterPrice;
