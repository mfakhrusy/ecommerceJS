import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/views/home/Home';
import Sell from 'components/views/sell/Sell';
import Chat from 'components/views/chat/Chat';
import Notifications from 'components/views/notifications/Notifications';
// import Categories from 'components/views/categories/Categories';
import CategoriesContainer from 'containers/views/categories/CategoriesContainer';
import Profile from 'components/views/profile/Profile';
import Help from 'components/views/help/Help';

const Mainpage = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sell" component={Sell} />
    <Route path="/chat" component={Chat} />
    <Route path="/notifications" component={Notifications} />
    <Route path="/categories" component={CategoriesContainer} />
    <Route path="/profile" component={Profile} />
    <Route path="/help" component={Help} />
  </Switch>
);

export default Mainpage;
