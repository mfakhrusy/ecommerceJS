import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { CircularProgress } from 'react-md';
// import urls from 'constants/urls';
import CategoryContentContainer from 'containers/views/categories/CategoryContentContainer';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';

// const accessibilityProps = {
//   'aria-busy': true,
//   'aria-describedby': 'categories-loading-progress',
// };

class Categories extends React.Component {
  // componentDidMount() {
  //   this.props.fetchData(urls.categories.url);
  // }

  render() {
    const content = <CategoryContentContainer categories={this.props.categories} />;

    // if (this.props.categoriesHasErrored) {
    // content = <h1>Categories Display Error!</h1>;
    // } else if (this.props.categoriesIsLoading) {
    // accessibilityProps['aria-busy'] = false;
    // content = <CircularProgress id={accessibilityProps['aria-describedby']} />;
    // } else {
    // content = <CategoryContent categories={this.props.categories} />;
    // }

    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Categories"
        nav={<BackButton />}
      >
        {content}
      </ViewsContainer>
    );
  }
}

Categories.propTypes = {
  // fetchData: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
  // categoriesHasErrored: PropTypes.bool.isRequired,
  // categoriesIsLoading: PropTypes.bool.isRequired,
};

export default withRouter(Categories);
