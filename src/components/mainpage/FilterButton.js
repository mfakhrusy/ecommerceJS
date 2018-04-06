import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const FilterButton = ({ className }) => (
  <Button icon className={className}>
    sort
  </Button>
);

FilterButton.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FilterButton;
