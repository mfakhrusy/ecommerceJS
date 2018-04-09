import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'react-md';
import SidebarHeaderContainer from 'containers/sidebar/SidebarHeaderContainer';
import Sidemenu from 'components/sidebar/Sidemenu';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.handleVisibility = this.handleVisibility.bind(this);
    this.handleClickBrowse = this.handleClickBrowse.bind(this);
  }

  handleVisibility() {
    if (this.props.isSidebarOpen) {
      this.props.onClick(!this.props.isSidebarOpen);
    }
  }

  handleClickBrowse() {
    this.props.onClick(!this.props.isSidebarOpen);
  }

  render() {
    console.log(this.props.isSidebarOpen);
    return (
      <Drawer
        id="page-sidebar"
        type={Drawer.DrawerTypes.TEMPORARY}
        visible={this.props.isSidebarOpen}
        onVisibilityChange={this.handleVisibility}
        position="left"
        header={
          <SidebarHeaderContainer />
        }
      >
        <Sidemenu onClickBrowse={this.handleClickBrowse} />
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;
