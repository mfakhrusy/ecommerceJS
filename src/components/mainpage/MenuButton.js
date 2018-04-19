import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Button from 'react-md/lib/Buttons/Button';

// const menuIcon = require('assets/icons/ic_menu_black_24px.svg');

// const MenuButton = ({ className, onClick, isSidebarOpen }) => {
class MenuButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.props.onClick(!this.props.isSidebarOpen);
    this.props.onClick(true);
  }

  render() {
    // const menuButtonClassNames = classNames({
    //   [this.props.className]: true,
    // 'md-icon': true,
    // 'md-btn--icon': true,
    // 'md-pointer--hover': true,
    // 'md-inline-block': true,
    // 'md-btn--toolbar': true,
    // 'md-toolbar--action-left': true,
    // });
    // mdpointer--hover md-inline-block md-btn--toolbar md-toolbar--action-left MenuButton
    return (
      <Button
        icon
        className={this.props.className}
        onClick={this.handleClick}
      >
        menu
      </Button>
      // <button
      //   className={menuButtonClassNames}
      //   onClick={this.handleClick}
      // >
      //   <div className="md-ink-container" />
      //   <img src={menuIcon} alt="menu" />
      //   {/* {menuIcon} */}
      // </button>
    );
  }
}

MenuButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // isSidebarOpen: PropTypes.bool.isRequired,
};

export default MenuButton;
