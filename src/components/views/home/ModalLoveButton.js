/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-md';
import Button from 'react-md/lib/Buttons';

// const ModalLoveButton = ({ homeItem, addFavoriteItem }) => {
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
    return (
      <div className="ModalLoveButton">
        <Button
          icon
          secondary={this.state.isLoved}
          onClick={() => { this.handleClick(this.props.homeItem); }}
        >
        favorite
        </Button>
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
