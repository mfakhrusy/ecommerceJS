import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Button from 'react-md/lib/Buttons/Button';
import FilterList from 'assets/svg/filter_list.svg';
import SVGButtonMD from 'components/utils/SVGButtonMD';

const FilterButton = ({ className, history }) => (
  // <Button
  //   icon
  //   className={className}
  //   onClick={() => { history.push('/filter'); }}
  // >
  //   filter_list
  // </Button>
  <SVGButtonMD
    className={className}
    onClick={() => { history.push('/filter'); }}
  >
    <FilterList height={30} width={30} />
  </SVGButtonMD>
);

FilterButton.propTypes = {
  className: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(FilterButton);
