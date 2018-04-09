import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, CircularProgress } from 'react-md';
import urls from 'constants/urls';
import MainNavbar from 'components/mainpage/MainNavbar';
import SidebarContainer from 'containers/sidebar/SidebarContainer';
import CategorySelectorContainer from 'containers/views/home/CategorySelectorContainer';
import HomeContent from 'components/views/home/HomeContent';

const accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'home-loading-progress',
};

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData(urls.home.url);
  }

  render() {
    let content = null;

    if (this.props.homeHasErrored) {
      content = <h1>Home Display Error!</h1>;
    } else if (this.props.homeIsLoading) {
      accessibilityProps['aria-busy'] = false;
      // content = <CircularProgress id={accessibilityProps['aria-describedby']} />;
      content = (
        <React.Fragment>
          <MainNavbar />
          <CategorySelectorContainer />
          <CircularProgress id={accessibilityProps['aria-describedby']} />
        </React.Fragment>
      );
    } else {
      content = (
        <React.Fragment>
          <MainNavbar />
          <CategorySelectorContainer />
          <HomeContent homeItems={this.props.homeItems} />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Drawer
          type={Drawer.DrawerTypes.TEMPORARY}
          defaultVisible
          position="right"
        >
          {content}
        </Drawer>
        <SidebarContainer />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
  homeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeHasErrored: PropTypes.bool.isRequired,
  homeIsLoading: PropTypes.bool.isRequired,
};

export default Home;
