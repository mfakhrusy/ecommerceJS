import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import HomeContainer from 'containers/views/home/HomeContainer';
import LoadableSell from 'components/mainpage/LoadableSell';
import LoadableChats from 'components/mainpage/LoadableChats';
import LoadableNotifications from 'components/mainpage/LoadableNotifications';
import LoadableCategories from 'components/mainpage/LoadableCategories';
import LoadableProfile from 'components/mainpage/LoadableProfile';
import LoadableFilter from 'components/mainpage/LoadableFilter';
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
    // this.props.categoriesFetchData(urls.categories.url);
  }

  render() {
    // categories related state is here because we need to render
    // the categories which located on Home, which is basically our first views
    // edit: categories is loaded from local files, no need to fetch it
    // if (this.props.ownuserIsLoading || this.props.categoriesIsLoading) {
    if (this.props.ownuserIsLoading) {
      // for accessibility
      accessibilityProps['aria-busy'] = false;
      return (
        <React.Fragment>
          {/* <MainNavbar /> */}
          {/* <CategorySelectorContainer /> */}
          <CircularProgress id={accessibilityProps['aria-describedby']} />
        </React.Fragment>
      );
    }
    // if (this.props.ownuserHasErrored || this.props.categoriesHasErrored) {
    if (this.props.ownuserHasErrored) {
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
        <Route path="/sell" component={LoadableSell} />
        <Route path="/chat" component={LoadableChats} />
        <Route path="/notifications" component={LoadableNotifications} />
        <Route path="/categories" component={LoadableCategories} />
        <Route path="/profile" component={LoadableProfile} />
        <Route path="/filter" component={LoadableFilter} />
      </Switch>
    );
  }
}

Mainpage.propTypes = {
  homeFetchData: PropTypes.func.isRequired,
  ownuserFetchData: PropTypes.func.isRequired,
  // categoriesFetchData: PropTypes.func.isRequired,
  ownuserIsLoading: PropTypes.bool.isRequired,
  ownuserHasErrored: PropTypes.bool.isRequired,
  // isLogin: PropTypes.bool.isRequired,
  // categoriesIsLoading: PropTypes.bool.isRequired,
  // categoriesHasErrored: PropTypes.bool.isRequired,
};

export default Mainpage;
