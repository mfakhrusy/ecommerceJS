/* eslint-disable react/no-did-mount-set-state, arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
// import { Card } from 'react-md';
import { Card } from 'react-md/lib/Cards';
import Footer from 'components/views/Footer';
// import { calcViewportHeight } from 'helpers/calculateDimension';

class HomeContent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    // this.updateWindowHeight = this.updateWindowHeight.bind(this);
    // calc viewport
    // this.vh = calcViewportHeight;
    // this.contentRef = React.createRef();
    // this.state = {
    //   contentHeight: 0,
    //   viewportHeight: 0,
    // };
    this.state = {
      homeContentIndex: 0,
    };
  }

  // componentDidUpdate() {
  //   console.log(this.contentRef.clientHeight);
  //   // this.setState({ contentHeight: this.contentRef.clientHeight });
  // }

  handleClick(id) {
    this.props.showModal(true);
    this.props.setHomeModal(id);
  }

  handleLoad(loadNextImage) {
    // console.log(this.state.homeContentIndex);
    if (loadNextImage || this.state.homeContentIndex === 0) {
      this.setState({ homeContentIndex: this.state.homeContentIndex + 2 });
    }
  }

  // updateWindowHeight() {
  //   this.setState({ viewportHeight: window.innerHeight });
  // }


  render() {
    const {
      homeSearchText, homeItems, filterCategory, filterPrice,
    } = this.props;

    const filteredHomeItems = homeItems
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
      });

    // split homeItems into chunks of two
    const slicedHomeItems = filteredHomeItems.slice(
      0, this.state.homeContentIndex + 1,
    );

    return (
      <React.Fragment>
        <div
          className="HomeContent"
          // ref={(contentRef) => { this.contentRef = contentRef; }}
        >
          <Masonry
            className="HomeContentMasonry"
            ref={(contentRef) => { this.contentRef = contentRef; }}
          >
            {slicedHomeItems
            .map((homeItem /* index, arr */) => {
              // if (this.state.contentHeight < this.state.viewportHeight) {
              // let loadNextImage = false;
              // if (arr.length === 2 && index === 1) {
              //   loadNextImage = true;
              // } else if (arr.length === 1) {
              //   loadNextImage = true;
              // }
              return (
                <Card
                  key={homeItem.id}
                  className="HomeContentItem"
                  onClick={() => this.handleClick(homeItem.id)}
                  onKeyPress={() => this.handleClick(homeItem.id)}
                  role="button"
                  tabIndex="0"
                >
                  <img
                    src={homeItem.thumbnailUrl[0]}
                    alt={`home-content-${homeItem.id}`}
                    onLoad={() => { this.handleLoad(true); }}
                  />
                  {/* <picture>
                    <source media="(min-width: 768px)" srcSet={homeItem.imageUrl[0]} />
                    <source media="(min-width: 320px)" srcSet={homeItem.mobileImageUrl[0]} />
                    <img src={homeItem.imageUrl[0]} alt={`home-content-${homeItem.id}`} />
                  </picture> */}
                </Card>
              );
               // }
                // return '';
            })}
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
