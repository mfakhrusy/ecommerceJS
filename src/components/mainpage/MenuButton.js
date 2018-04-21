/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Button from 'react-md/lib/Buttons/Button';
import Menu from 'assets/svg/menu.svg';
import SVGButtonMD from 'components/utils/SVGButtonMD';

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
    const menuButtonClassNames = classNames({
      [this.props.className]: true,
   });
    return (
      // <Button
      //   icon
      //   className={this.props.className}
      //   onClick={this.handleClick}
      // >
      //   menu
      // </Button>
      <SVGButtonMD
        className={menuButtonClassNames}
        onClick={this.handleClick}
      >
        <Menu height={30} width={30} />
      </SVGButtonMD>

    );
  }
}

MenuButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // isSidebarOpen: PropTypes.bool.isRequired,
};

export default MenuButton;
