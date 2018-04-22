/* eslint-disable max-len, no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// import { Drawer, CircularProgress, Paper } from 'react-md';
import Paper from 'react-md/lib/Papers';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Drawer from 'react-md/lib/Drawers';
import MainNavbar from 'components/mainpage/MainNavbar';
import SidebarContainer from 'containers/sidebar/SidebarContainer';
import CategorySelectorContainer from 'containers/views/home/CategorySelectorContainer';
import HomeContentContainer from 'containers/views/home/HomeContentContainer';
import HomeModalContainer from 'containers/views/home/HomeModalContainer';
import Footer from 'components/views/Footer';
import urls from 'constants/urls';

const accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'home-loading-progress',
};

class Home extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contentHeight: 0,
  //     viewportHeight: 0,
  //   };
  // }
  // download chats on home
  componentDidMount() {
    this.props.chatsfetchData(urls.chats.url);
  }

  render() {
    let content = null;

    if (this.props.homeHasErrored) {
      content = <h1>Home Display Error!</h1>;
    } else if (this.props.homeIsLoading && this.props.homeItems.length === 0) {
      accessibilityProps['aria-busy'] = false;
      content = (
        <React.Fragment>
          <MainNavbar />
          <CategorySelectorContainer />
          <CircularProgress id={accessibilityProps['aria-describedby']} />
        </React.Fragment>
      );
    } else if (this.props.homeItems.length > 0) {
      // below a little hack because the index is start from one
      // but array need to start from zero
      // so we have that this.props.homeModal - 1 for correctly displaying the modal
      // for each item
      content = (
        <React.Fragment>
          <MainNavbar />
          <CategorySelectorContainer />
          <HomeContentContainer homeItems={this.props.homeItems} />
          {this.props.isModalOpen ? <HomeModalContainer homeItem={this.props.homeItems[this.props.homeModal - 1]} /> : ''}
        </React.Fragment>
      );
    }

    return (
      <Paper className="Home">
        {content}
        <SidebarContainer />
      </Paper>
    );
  }
}

Home.propTypes = {
  homeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeHasErrored: PropTypes.bool.isRequired,
  homeIsLoading: PropTypes.bool.isRequired,
  homeModal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  chatsfetchData: PropTypes.func.isRequired,
};

export default Home;
