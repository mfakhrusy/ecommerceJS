import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-md/lib/Drawers';
import SidebarHeaderContainer from 'containers/sidebar/SidebarHeaderContainer';
import Sidemenu from 'components/sidebar/Sidemenu';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.handleVisibility = this.handleVisibility.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  handleVisibility() {
    // this will invoke when outside sidebar is clicked
    // so the sidebar will close/unmount
    if (this.props.isSidebarOpen) {
      this.props.showSidebar(!this.props.isSidebarOpen);
    }
  }

  closeSidebar() {
    // this will unmount the sidebar
    // when one of the side menu item is clicked.
    this.props.showSidebar(false);
  }

  render() {
    return (
      <Drawer
        className="Sidebar"
        id="page-sidebar"
        type={Drawer.DrawerTypes.TEMPORARY}
        visible={this.props.isSidebarOpen}
        onVisibilityChange={this.handleVisibility}
        position="left"
        header={
          <SidebarHeaderContainer
            closeSidebar={this.closeSidebar}
          />
        }
      >
        <Sidemenu onClickBrowse={this.closeSidebar} />
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  showSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
