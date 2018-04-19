import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

const Loading = ({ id }) => (
  <CircularProgress
    id={id}
  />
);

Loading.defaultProps = {
  id: '',
};

Loading.propTypes = {
  id: PropTypes.string,
};

export default Loading;
