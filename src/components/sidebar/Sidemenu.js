import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-md';
import MenuItem from 'components/sidebar/MenuItem';
import menuItems from 'assets/js/menuItems';

class Sidemenu extends React.Component {
  constructor() {
    super();

    this.state = {
      menuItems,
    };
  }

  render() {
    const localMenuItems = this.state.menuItems.map(item => (
      <MenuItem
        key={item.id}
        label={item.label}
        mdIcon={item.mdIcon}
        route={item.route}
        onClickBrowse={this.props.onClickBrowse}
      />
    ));
    return (
      <List className="Sidemenu">
        {localMenuItems}
      </List>
    );
  }
}

Sidemenu.propTypes = {
  onClickBrowse: PropTypes.func.isRequired,
};

export default Sidemenu;
