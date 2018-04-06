/* eslint-disable react/no-did-mount-set-state, react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Paper, Button } from 'react-md';
import ViewNavbar from 'components/views/ViewNavbar';
import classNames from 'classnames';

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
    const paperClassNames = classNames({
      'view-paper': true,
      'view-fixed': this.props.fixed,
      'view-inset': this.props.inset,
      // !! -> change to boolean.
      [this.props.className]: !!this.props.className,
    });

    return (
      <Drawer
        type={Drawer.DrawerTypes.TEMPORARY}
        defaultVisible
        position="right"
      >
        <ViewNavbar
          inset={this.props.inset}
          fixed={this.props.fixed}
          nav={this.props.nav}
          title={this.props.title}
          actions={this.props.actions}
        />
        <Paper className={paperClassNames}>
          {this.props.children}
        </Paper>
      </Drawer>
    );
  }
}

Views.defaultProps = {
  inset: false,
  fixed: false,
  className: '',
  nav: <Button icon>menu</Button>,
  title: '',
  actions: <Button icon>more_vert</Button>,
};

Views.propTypes = {
  isSidebarShown: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  pathname: PropTypes.string.isRequired,
  nav: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  actions: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
  fixed: PropTypes.bool,
  inset: PropTypes.bool,
};

export default Views;
