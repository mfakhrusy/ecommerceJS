import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

// const MenuButton = ({ className, onClick, isSidebarOpen }) => {
class MenuButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(!this.props.isSidebarOpen);
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
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default MenuButton;
