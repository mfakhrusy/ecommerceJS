import React from 'react';
import PropTypes from 'prop-types';
// import { Card, Button } from 'react-md';
import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards';
import urls from 'constants/urls';

class Login extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.ownuserFetchData(urls.ownUser.url);
    this.props.categoriesFetchData(urls.categories.url);
  }

  render() {
    return (
      <Card className="Login" id="login">
        <h2>Just Mock Login</h2>
        <Button
          flat
          primary
          swapTheming
          onClick={this.handleClick}
        >
        Login
        </Button>
      </Card>
    );
  }
}

Login.propTypes = {
  ownuserFetchData: PropTypes.func.isRequired,
  categoriesFetchData: PropTypes.func.isRequired,
};

export default Login;
