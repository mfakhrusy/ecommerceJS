import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoryContentContainer from 'containers/views/categories/CategoryContentContainer';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';
import categories from 'assets/js/categories';

class Categories extends React.Component {
  render() {
    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Categories"
        nav={<BackButton />}
      >
        <CategoryContentContainer categories={categories} />
      </ViewsContainer>
    );
  }
}

Categories.propTypes = {
  // categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Categories);
