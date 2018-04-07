import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { CircularProgress } from 'react-md';
import LoginContainer from 'containers/views/login/LoginContainer';
import Home from 'components/views/home/Home';
import Sell from 'components/views/sell/Sell';
import ChatsContainer from 'containers/views/chats/ChatsContainer';
import NotificationsContainer from 'containers/views/notifications/NotificationsContainer';
import CategoriesContainer from 'containers/views/categories/CategoriesContainer';
import ProfileContainer from 'containers/views/profile/ProfileContainer';
import Help from 'components/views/help/Help';

// for accessibility,
// see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role
// and https://react-md.mlaursen.com/components/progress/circular

const accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'mainpage-loading-progress',
};

class Mainpage extends React.Component {
  render() {
    if (this.props.ownuserIsLoading) {
      // for accessibility
      accessibilityProps['aria-busy'] = false;
      return (
        <CircularProgress id={accessibilityProps['aria-describedby']} />
      );
    }
    if (this.props.ownuserHasErrored) {
      return (
        <h2>Error</h2>
      );
    }
    if (this.props.isLogin) {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sell" component={Sell} />
          <Route path="/chat" component={ChatsContainer} />
          <Route path="/notifications" component={NotificationsContainer} />
          <Route path="/categories" component={CategoriesContainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/help" component={Help} />
        </Switch>
      );
    }
    return (
      <LoginContainer />
    );
  }
}

Mainpage.propTypes = {
  ownuserIsLoading: PropTypes.bool.isRequired,
  ownuserHasErrored: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  // categoriesIsLoading: PropTypes.bool.isRequired,
  // categoriesHasErrored: PropTypes.bool.isRequired,
};

export default Mainpage;
