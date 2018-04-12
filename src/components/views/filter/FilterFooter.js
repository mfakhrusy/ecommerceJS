import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

class FilterFooter extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(category) {
    this.props.setFilterCategories(category);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="FilterFooter">
        <Button
          flat
          primary
        >
          Reset
        </Button>
        <Button
          flat
          primary
          swapTheming
          onClick={() => { this.handleClick(this.props.filter.category); }}
        >
          Submit
        </Button>
      </div>
    );
  }
}

FilterFooter.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilterCategories: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(FilterFooter);
