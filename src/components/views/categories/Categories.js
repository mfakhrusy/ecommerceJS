import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import urls from 'constants/urls';
import CategoryContent from 'components/views/categories/CategoryContent';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchData(urls.categories.url);
  }

  render() {
    if (this.props.categoriesHasErrored) {
      return (
        <h1>Categories Display Error!</h1>
      );
    }

    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Categories"
        nav={<BackButton />}
      >
        <CategoryContent categories={this.props.categories} />
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
