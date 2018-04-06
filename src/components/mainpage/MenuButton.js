import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

// const MenuButton = ({ className, onClick, isSidebarShown }) => {
class MenuButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(!this.props.isSidebarShown);
  }

  render() {
    return (
      <Button
        icon
        className={this.props.className}
        onClick={this.handleClick}
      >
        menu
      </Button>
    );
  }
}

MenuButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSidebarShown: PropTypes.bool.isRequired,
};

export default MenuButton;
