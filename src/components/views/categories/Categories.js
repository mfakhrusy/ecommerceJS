import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import urls from 'constants/urls';
// import ViewsContainer from 'components/viewsContainer/ViewsContainer';
import ViewsContainer from 'containers/views/ViewsContainer';

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchData(urls.categories.url);
  }

  render() {
    console.log(this.props.categories);
    if (this.props.categoriesHasErrored) {
      return (
        <h1>Error!</h1>
      );
    }

    return (
      <ViewsContainer pathname={this.props.location.pathname}>
        <p>Categories</p>
      </ViewsContainer>
    );
  }
}

Categories.propTypes = {
  fetchData: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
  categoriesHasErrored: PropTypes.bool.isRequired,
};

export default withRouter(Categories);
