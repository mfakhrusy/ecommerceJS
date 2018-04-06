import React from 'react';
import { withRouter } from 'react-router-dom';
import { ListItem, FontIcon } from 'react-md';
import PropTypes from 'prop-types';

const MenuItem = ({
  label, mdIcon, route, history,
}) => (
  <ListItem
    leftIcon={<FontIcon>{mdIcon}</FontIcon>}
    primaryText={label}
    onClick={() => { history.push(route); }}
  />
);

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  mdIcon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(MenuItem);
