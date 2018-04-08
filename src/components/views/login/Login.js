import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-md';
import urls from 'constants/urls';

class Login extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchData(urls.ownUser.url);
    this.props.categoriesfetchData(urls.categories.url);
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
  fetchData: PropTypes.func.isRequired,
  categoriesfetchData: PropTypes.func.isRequired,
};

export default Login;
