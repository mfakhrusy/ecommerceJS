import React from 'react';
import PropTypes from 'prop-types';
import HomeModalContentDescription from 'components/views/home/HomeModalContentDescription';
import HomeModalContentMain from 'components/views/home/HomeModalContentMain';
// import HomeModalShare from './HomeModalShare';

class HomeModalContent extends React.Component {
  render() {
    let content = null;
    if (this.props.descriptionIsOpen) {
      content = (
        <HomeModalContentDescription
          homeItem={this.props.homeItem}
          showDescription={this.props.showDescription}
          // showShare={this.props.showShare}
          descriptionIsOpen={this.props.descriptionIsOpen}
          // shareIsOpen={this.props.shareIsOpen}
        />
      );
    } else {
      content = (
        <HomeModalContentMain
          homeItem={this.props.homeItem}
          showDescription={this.props.showDescription}
          // showShare={this.props.showShare}
        />
      );
    }
    return (
      content
    );
  }
}

HomeModalContent.propTypes = {
  homeItem: PropTypes.object.isRequired,
  showDescription: PropTypes.func.isRequired,
  // showShare: PropTypes.func.isRequired,
  descriptionIsOpen: PropTypes.bool.isRequired,
  // shareIsOpen: PropTypes.bool.isRequired,
};

export default HomeModalContent;
