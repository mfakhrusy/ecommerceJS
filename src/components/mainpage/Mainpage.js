import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import MainNavbar from 'components/mainpage/MainNavbar';
import CategorySelectorContainer from 'containers/views/home/CategorySelectorContainer';
// import LoginContainer from 'containers/views/login/LoginContainer';
import HomeContainer from 'containers/views/home/HomeContainer';
import Sell from 'components/views/sell/Sell';
import ChatsContainer from 'containers/views/chats/ChatsContainer';
import NotificationsContainer from 'containers/views/notifications/NotificationsContainer';
import CategoriesContainer from 'containers/views/categories/CategoriesContainer';
import ProfileContainer from 'containers/views/profile/ProfileContainer';
import Help from 'components/views/help/Help';
import Filter from 'components/views/filter/Filter';
import urls from 'constants/urls';

// for accessibility,
// see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role
// and https://react-md.mlaursen.com/components/progress/circular
const accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'mainpage-loading-progress',
};

class Mainpage extends React.Component {
  componentDidMount() {
    this.props.homeFetchData(urls.home.url);
    this.props.ownuserFetchData(urls.ownUser.url);
    this.props.categoriesFetchData(urls.categories.url);
  }

  render() {
    // categories related state is here because we need to render
    // the categories which located on Home, which is basically our first views
    if (this.props.ownuserIsLoading || this.props.categoriesIsLoading) {
      // for accessibility
      accessibilityProps['aria-busy'] = false;
      return (
        <React.Fragment>
          <MainNavbar />
          <CategorySelectorContainer />
          <CircularProgress id={accessibilityProps['aria-describedby']} />
        </React.Fragment>
      );
    }
    if (this.props.ownuserHasErrored || this.props.categoriesHasErrored) {
      return (
        <h2>Error</h2>
      );
    }
    // if (this.props.isLogin) {
    //   return (
    //     <Switch>
    //       <Route exact path="/" component={HomeContainer} />
    //       <Route path="/sell" component={Sell} />
    //       <Route path="/chat" component={ChatsContainer} />
    //       <Route path="/notifications" component={NotificationsContainer} />
    //       <Route path="/categories" component={CategoriesContainer} />
    //       <Route path="/profile" component={ProfileContainer} />
    //       <Route path="/help" component={Help} />
    //       <Route path="/filter" component={Filter} />
    //     </Switch>
    //   );
    // }
    // return (
    //   <LoginContainer />
    // );
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/sell" component={Sell} />
        <Route path="/chat" component={ChatsContainer} />
        <Route path="/notifications" component={NotificationsContainer} />
        <Route path="/categories" component={CategoriesContainer} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/help" component={Help} />
        <Route path="/filter" component={Filter} />
      </Switch>
    );
  }
}

Mainpage.propTypes = {
  homeFetchData: PropTypes.func.isRequired,
  ownuserFetchData: PropTypes.func.isRequired,
  categoriesFetchData: PropTypes.func.isRequired,
  ownuserIsLoading: PropTypes.bool.isRequired,
  ownuserHasErrored: PropTypes.bool.isRequired,
  // isLogin: PropTypes.bool.isRequired,
  categoriesIsLoading: PropTypes.bool.isRequired,
  categoriesHasErrored: PropTypes.bool.isRequired,
};

export default Mainpage;
