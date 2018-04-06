import React from 'react';
import NavigationBar from 'components/mainpage/NavigationBar';
import SidebarContainer from 'containers/sidebar/SidebarContainer';

const Homepage = () => (
  <React.Fragment>
    <NavigationBar />
    <SidebarContainer />
  </React.Fragment>
);

export default Homepage;
