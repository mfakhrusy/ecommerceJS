import React from 'react';
import PropTypes from 'prop-types';
import Favorite from 'assets/svg/favorite.svg';
import FavoriteBorder from 'assets/svg/favorite_border.svg';
import SVGButtonMD from 'components/utils/SVGButtonMD';

class ModalLoveButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    // check if the homeItem is already in favoriteItems. If it is, then
    // the primary props on button (change its color to theme color) should be true
    this.state = {
      isLoved: this.props.favoriteItems.includes(this.props.homeItem),
    };
  }

  handleClick(homeItem) {
    this.setState({ isLoved: !this.state.isLoved });
    // check whether the favorite items is already included in favoriteItems array or not
    if (!this.props.favoriteItems.includes(homeItem)) {
      this.props.addFavoriteItem(homeItem);
    } else {
      this.props.deleteFavoriteItem(homeItem);
    }
  }

  render() {
    // change icon depending on the state
    const icon = this.state.isLoved ? (
      <Favorite fill="#ff0000" height={30} width={30} />
    ) : (
      <FavoriteBorder fill="#ffffff" height={30} width={30} />
    );
    return (
      <div className="ModalLoveButton">
        <SVGButtonMD
          onClick={() => { this.handleClick(this.props.homeItem); }}
        >
          {icon}
        </SVGButtonMD>
      </div>
    );
  }
}

ModalLoveButton.propTypes = {
  addFavoriteItem: PropTypes.func.isRequired,
  deleteFavoriteItem: PropTypes.func.isRequired,
  homeItem: PropTypes.object.isRequired,
  favoriteItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ModalLoveButton;
