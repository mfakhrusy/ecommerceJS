/* eslint-disable react/jsx-indent, max-len, arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Card } from 'react-md';

class HomeContent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.showModal(true);
    this.props.setHomeModal(id);
  }

  render() {
    return (
      <Masonry className="HomeContent">
        {this.props.homeItems.filter((homeItem) => {
          // filterCategory will be an empty string if on initial render
          // or when user press all filter (first item on filter)
          if (this.props.filterCategory !== '') {
            return homeItem.type === this.props.filterCategory;
          }
          return true;
        })
          .map((homeItem) => (
          <Card
            className="HomeContentItem"
            onClick={() => this.handleClick(homeItem.id)}
            key={homeItem.id}
            onKeyPress={() => this.handleClick(homeItem.id)}
            role="button"
            tabIndex="0"
          >
            <img src={homeItem.imageUrl[0]} alt={`home-content-${homeItem.id}`} />
          </Card>
        ))}
      </Masonry>
    );
  }
}

HomeContent.propTypes = {
  homeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHomeModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
};

export default HomeContent;
