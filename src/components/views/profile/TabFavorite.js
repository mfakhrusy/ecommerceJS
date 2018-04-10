import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md';

class TabFavorite extends React.Component {
  render() {
    return (
      <div className="TabFavorite">
        {this.props.favoriteItems.map(item => (
          <Card
            key={item.id}
            className="TabFavoriteItem"
          >
            <img src={item.imageUrl} alt={`favorite-${item.id}`} />
          </Card>
        ))}
      </div>
    );
  }
}

TabFavorite.propTypes = {
  favoriteItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabFavorite;
