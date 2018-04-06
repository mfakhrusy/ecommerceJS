/* eslint-disable react/no-did-mount-set-state, react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'react-md';
import ViewNavbar from 'components/views/ViewNavbar';

class Views extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    if (this.props.pathname !== undefined) {
      this.setState({ isVisible: true });
      // unmount the sidebar
      this.props.onClick(!this.props.isSidebarShown);
    }
  }

  render() {
    return (
      <Drawer
        type={Drawer.DrawerTypes.TEMPORARY}
        defaultVisible
        position="right"
      >
        <ViewNavbar />
        {this.props.children}
      </Drawer>
    );
  }
}

Views.propTypes = {
  isSidebarShown: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Views;
