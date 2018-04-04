import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';

const Homepage = () => (
  <React.Fragment>
    <NavigationDrawer
      drawerTitle="react-md with webpack"
      toolbarTitle="Welcome to react-md"
      tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    />
  </React.Fragment>
);

export default Homepage;
