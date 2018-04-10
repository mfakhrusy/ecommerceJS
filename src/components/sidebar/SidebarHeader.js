import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toolbar } from 'react-md';
import UserAvatarContainer from 'containers/utils/UserAvatarContainer';

class SidebarHeader extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
    // a little hack, but works for now.
    // so the sidebar will close first then the route will fire
    setTimeout(() => { this.props.history.push('/profile'); }, 350);
  }

  render() {
    return (
      <Toolbar
        id="sidebar-header"
        className="SidebarHeader"
        colored
        fixed
        nav={
          <div
            onClick={this.handleClick}
            role="button"
            onKeyPress={this.handleClick}
            tabIndex="0"
          >
            <UserAvatarContainer />
          </div>}
        title={`Hello, ${this.props.ownuser.name}`}
      />
    );
  }
}

SidebarHeader.propTypes = {
  ownuser: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withRouter(SidebarHeader);
