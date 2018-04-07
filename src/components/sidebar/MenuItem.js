import React from 'react';
import { withRouter } from 'react-router-dom';
import { ListItem, FontIcon } from 'react-md';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.route !== '/') {
      this.props.history.push(this.props.route);
    } else {
      this.props.onClickBrowse();
    }
  }
  render() {
    return (
      <ListItem
        leftIcon={<FontIcon>{this.props.mdIcon}</FontIcon>}
        primaryText={this.props.label}
        onClick={this.handleClick}
      />
    );
  }
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  mdIcon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  onClickBrowse: PropTypes.func.isRequired,
};

export default withRouter(MenuItem);
