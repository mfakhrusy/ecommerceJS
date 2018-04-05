import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'react-md';
import SidebarHeader from 'components/sidebar/SidebarHeader';
import Sidemenu from 'components/sidebar/Sidemenu';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility() {
    if (this.props.isSidebarShown) {
      this.props.onClick(!this.props.isSidebarShown);
    }
  }

  render() {
    return (
      <Drawer
        id="page-sidebar"
        type={Drawer.DrawerTypes.TEMPORARY}
        visible={this.props.isSidebarShown}
        onVisibilityChange={this.handleVisibility}
        position="left"
        header={
          <SidebarHeader />
        }
      >
        <Sidemenu />
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  isSidebarShown: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;
