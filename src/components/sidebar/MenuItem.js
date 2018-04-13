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
      this.props.onClickBrowse();
      // a little hack, but works for now.
      // so the sidebar will close first then the route will fire
      setTimeout(() => { this.props.history.push(this.props.route); }, 350);
    } else {
      this.props.onClickBrowse();
    }
  }
  render() {
    return (
      <ListItem
        className="MenuItem"
        leftIcon={<FontIcon>{this.props.mdIcon}</FontIcon>}
        primaryText={<p>{this.props.label}</p>}
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
