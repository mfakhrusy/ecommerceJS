import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
// import { Card } from 'react-md';
import { Card } from 'react-md/lib/Cards';
import Footer from 'components/views/Footer';

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
    const {
      homeSearchText, homeItems, filterCategory, filterPrice,
    } = this.props;
    return (
      <React.Fragment>
        <div className="HomeContent">
          <Masonry className="HomeContentMasonry">
            {homeItems
            // first filter: category selector
            .filter((homeItem) => {
              // filterCategory will be an empty string if on initial render
              // or when user press all filter (first item on filter)
              if (filterCategory !== '') {
                return homeItem.type === filterCategory;
              }
              return true;
            })
            // second filter, price filter
            .filter(homeItem => (
              // have two value, minPrice and maxPrice
              homeItem.price >= filterPrice.minPrice && homeItem.price <= filterPrice.maxPrice
            ))
            // third filter: search bar
            .filter((homeItem) => {
              if (homeSearchText !== '') {
                // toLowerCase to make sure that when user type lower case string
                // everything can still be searched accordingly
                // a.k.a make it case insensitive
                // we only search from 2 source: name and type.
                if (homeItem.name.toLowerCase().includes(homeSearchText.toLowerCase())) {
                  return true;
                } else if (homeItem.type.toLowerCase().includes(homeSearchText.toLowerCase())) {
                  return true;
                }
                return false;
              }
              return true;
            })
            .map(homeItem => (
              <Card
                key={homeItem.id}
                className="HomeContentItem"
                onClick={() => this.handleClick(homeItem.id)}
                onKeyPress={() => this.handleClick(homeItem.id)}
                role="button"
                tabIndex="0"
              >
                <img src={homeItem.imageUrl[0]} alt={`home-content-${homeItem.id}`} />
              </Card>
            ))}
          </Masonry>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

HomeContent.propTypes = {
  homeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHomeModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
  filterPrice: PropTypes.object.isRequired,
  homeSearchText: PropTypes.string.isRequired,
};

export default HomeContent;
