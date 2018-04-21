import React from 'react';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import MenuButtonContainer from 'containers/mainpage/MenuButtonContainer';
import FilterButton from 'components/mainpage/FilterButton';
import SearchContainer from 'containers/mainpage/SearchContainer';

const MainNavbar = () => (
  <Toolbar
    className="MainNavbar"
    // inset
    fixed
    nav={<MenuButtonContainer className="MenuButton" />}
    title={<SearchContainer />}
    actions={<FilterButton className="FilterButton" />}
  />
);

export default MainNavbar;
