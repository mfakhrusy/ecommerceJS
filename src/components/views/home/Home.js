import React from 'react';
import MainNavbar from 'components/mainpage/MainNavbar';
import SidebarContainer from 'containers/sidebar/SidebarContainer';
import CategorySelectorContainer from 'containers/views/home/CategorySelectorContainer';

const Home = () => (
  <React.Fragment>
    <MainNavbar />
    <CategorySelectorContainer />
    <SidebarContainer />
  </React.Fragment>
);

export default Home;
