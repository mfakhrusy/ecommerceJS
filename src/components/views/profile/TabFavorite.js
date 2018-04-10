import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md';
import Masonry from 'react-masonry-component';

class TabFavorite extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(favoriteItem) {
    this.props.setProfileModal(favoriteItem);
    this.props.showModal(true);
  }

  render() {
    return (
      <Masonry className="TabFavorite">
        {this.props.favoriteItems.map(favoriteItem => (
          <React.Fragment key={favoriteItem.id}>
            <Card
              className="TabFavoriteItem"
              onClick={() => this.handleClick(favoriteItem)}
              onKeyPress={() => this.handleClick(favoriteItem)}
              role="button"
              tabIndex="0"
            >
              <img src={favoriteItem.imageUrl} alt={`favorite-${favoriteItem.id}`} />
            </Card>
          </React.Fragment>
        ))}
      </Masonry>
    );
  }
}

TabFavorite.propTypes = {
  favoriteItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProfileModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default TabFavorite;
