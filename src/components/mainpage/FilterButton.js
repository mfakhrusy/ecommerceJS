import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';

const FilterButton = ({ className, history }) => (
  <Button
    icon
    className={className}
    onClick={() => { history.push('/filter'); }}
  >
    filter_list
  </Button>
);

FilterButton.propTypes = {
  className: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(FilterButton);
