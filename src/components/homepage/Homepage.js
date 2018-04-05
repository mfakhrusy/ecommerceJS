import React from 'react';
import NavigationBar from 'components/homepage/NavigationBar';
import SidebarContainer from 'containers/sidebar/SidebarContainer';

const Homepage = () => (
  <React.Fragment>
    <NavigationBar />
    <SidebarContainer />
  </React.Fragment>
);

export default Homepage;
