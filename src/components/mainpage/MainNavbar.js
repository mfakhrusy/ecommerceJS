import React from 'react';
import { Toolbar } from 'react-md';
import MenuButtonContainer from 'containers/mainpage/MenuButtonContainer';
import FilterButton from 'components/mainpage/FilterButton';
import SearchContainer from 'containers/mainpage/SearchContainer';

const MainNavbar = () => (
  <React.Fragment>
    <Toolbar
      inset
      nav={<MenuButtonContainer className="MenuButton" />}
      title={<SearchContainer />}
      actions={<FilterButton className="filterButton" />}
    />
  </React.Fragment>
);

export default MainNavbar;
