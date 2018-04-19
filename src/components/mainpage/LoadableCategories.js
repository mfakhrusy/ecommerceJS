import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/utils/Loading';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/categories/CategoriesContainer'),
  loading() {
    return <Loading />;
  },
});

class LoadableCategories extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableCategories;
