import React from 'react';
import { Toolbar } from 'react-md';
// import MenuButton from 'components/homepage/MenuButton';
import MenuButtonContainer from 'containers/homepage/MenuButtonContainer';
import FilterButton from 'components/homepage/FilterButton';
import Search from 'components/homepage/Search';

const NavigationBar = () => (
  <React.Fragment>
    <Toolbar
      colored
      fixed
      nav={<MenuButtonContainer className="MenuButton" />}
      title={<Search />}
      actions={<FilterButton className="filterButton" />}
    />
  </React.Fragment>
);

export default NavigationBar;
