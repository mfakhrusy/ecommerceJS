import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Toolbar } from 'react-md';
import BackButton from 'components/views/BackButton';

const ViewNavbar = ({ history }) => (
  <Toolbar
    inset
    nav={<BackButton
      className="BackButton"
      onClick={() => { history.push('/'); }}
    />}
  />
);

ViewNavbar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(ViewNavbar);
