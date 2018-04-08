import React from 'react';
import { Drawer } from 'react-md';
import MainNavbar from 'components/mainpage/MainNavbar';
import SidebarContainer from 'containers/sidebar/SidebarContainer';
import CategorySelectorContainer from 'containers/views/home/CategorySelectorContainer';
import HomeContent from 'components/views/home/HomeContent';

const Home = () => (
  <React.Fragment>
    <Drawer
      type={Drawer.DrawerTypes.TEMPORARY}
      defaultVisible
      position="right"
    >
      <MainNavbar />
      <CategorySelectorContainer />
      <HomeContent />
    </Drawer>
    <SidebarContainer />
  </React.Fragment>
);

export default Home;
