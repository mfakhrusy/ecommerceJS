import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('containers/views/categories/CategoriesContainer'),
  loading() {
    return <div>Loading...</div>;
  },
});

class LoadableCategories extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}

export default LoadableCategories;
