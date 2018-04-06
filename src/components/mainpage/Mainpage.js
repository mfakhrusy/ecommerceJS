import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from 'containers/views/login/LoginContainer';
import Home from 'components/views/home/Home';
import Sell from 'components/views/sell/Sell';
import Chat from 'components/views/chat/Chat';
import Notifications from 'components/views/notifications/Notifications';
import CategoriesContainer from 'containers/views/categories/CategoriesContainer';
import ProfileContainer from 'containers/views/profile/ProfileContainer';
import Help from 'components/views/help/Help';

class Mainpage extends React.Component {
  render() {
    if (this.props.ownuserIsLoading) {
      return (
        <h2>Loading</h2>
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
          <Route path="/chat" component={Chat} />
          <Route path="/notifications" component={Notifications} />
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
};

export default Mainpage;
