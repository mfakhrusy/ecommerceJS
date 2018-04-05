import React from 'react';
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
      />
    ));
    return (
      <List>
        {localMenuItems}
      </List>
    );
  }
}

export default Sidemenu;
