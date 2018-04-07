import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Button } from 'react-md';

const ViewNavbar = ({
  inset,
  fixed,
  nav,
  title,
  actions,
}) => (
  <Toolbar
    className="ViewNavbar"
    id="view-navbar"
    inset={inset}
    fixed={fixed}
    nav={nav}
    title={title === '' ? '' : <div className="ViewNavbarTitle">{title}</div>}
    actions={actions}
  />
);

ViewNavbar.defaultProps = {
  inset: false,
  fixed: false,
  nav: <Button icon>menu</Button>,
  title: '',
  actions: <Button icon>more_vert</Button>,
};

ViewNavbar.propTypes = {
  inset: PropTypes.bool,
  fixed: PropTypes.bool,
  nav: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  actions: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default ViewNavbar;
