import React from 'react';
import PropTypes from 'prop-types';

class HomeModalImage extends React.Component {
  render() {
    let content = null;
    const { homeItem, descriptionIsOpen } = this.props;
    if (descriptionIsOpen /* || this.props.shareIsOpen */) {
      content = '';
    } else if (Object.keys(homeItem).length === 0) {
      // check if this.props.homeItem is empty or not
      content = '';
    } else {
      content = (
        // this.props.homeItem.imageUrl.map((url, index) => (
        //   <div
        //     id={`image-${this.props.homeItem.type}-${index}`}
        //     className="HomeModalImageItem"
        //     key={index.toString()}
        //   >
        //     <img src={url} alt={`home-modal-${index}`} />
        //   </div>
        // ))
        // <picture className="HomeModalImageItem">
        //   <source media="(min-width: 768px)" srcSet={homeItem.imageUrl[0]} />
        //   <source media="(min-width: 320px)" srcSet={homeItem.mobileImageUrl[0]} />
        //   <img src={homeItem.imageUrl[0]} alt={`home-content-${homeItem.id}`} />
        // </picture>
        <img src={homeItem.imageUrl[0]} alt={`modal-${homeItem.id}`} />
      );
    }

    return (
      <div className="HomeModalImage">
        {content}
      </div>
    );
  }
}

HomeModalImage.propTypes = {
  homeItem: PropTypes.object.isRequired,
  descriptionIsOpen: PropTypes.bool.isRequired,
  // shareIsOpen: PropTypes.bool.isRequired,
};

export default HomeModalImage;
