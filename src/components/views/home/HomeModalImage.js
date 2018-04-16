import React from 'react';
import PropTypes from 'prop-types';

class HomeModalImage extends React.Component {
  render() {
    let content = null;
    if (this.props.descriptionIsOpen /* || this.props.shareIsOpen */) {
      content = '';
    } else if (Object.keys(this.props.homeItem).length === 0) {
      // check if this.props.homeItem is empty or not
      content = '';
    } else {
      content = (
        this.props.homeItem.imageUrl.map((url, index) => (
          <div
            id={`image-${this.props.homeItem.type}-${index}`}
            className="HomeModalImageItem"
            key={index.toString()}
          >
            <img src={url} alt={`home-modal-${index}`} />
          </div>
        ))
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
