import React from 'react';
import { Toolbar } from 'react-md';
import MenuButtonContainer from 'containers/mainpage/MenuButtonContainer';
import FilterButton from 'components/mainpage/FilterButton';
import Search from 'components/mainpage/Search';

const MainNavbar = () => (
  <React.Fragment>
    <Toolbar
      inset
      nav={<MenuButtonContainer className="MenuButton" />}
      title={<Search />}
      actions={<FilterButton className="filterButton" />}
    />
  </React.Fragment>
);

export default MainNavbar;
