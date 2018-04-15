import React from 'react';
import PropTypes from 'prop-types';
import HomeModalContent from 'components/views/home/HomeModalContent';
import HomeModalImage from 'components/views/home/HomeModalImage';
import Modal from 'components/utils/Modal';

class HomeModal extends React.Component {
  constructor() {
    super();

    this.state = {
      descriptionIsOpen: false,
      shareIsOpen: false,
    };
    this.showDescription = this.showDescription.bind(this);
    this.showShare = this.showShare.bind(this);
  }

  showDescription(bool) {
    this.setState({ descriptionIsOpen: bool });
  }

  showShare(bool) {
    this.setState({ shareIsOpen: bool });
  }

  render() {
    return (
      <Modal className="HomeModal">
        <HomeModalImage
          homeItem={this.props.homeItem}
          descriptionIsOpen={this.state.descriptionIsOpen}
          shareIsOpen={this.state.shareIsOpen}
        />
        <HomeModalContent
          homeItem={this.props.homeItem}
          showDescription={this.showDescription}
          showShare={this.showShare}
          descriptionIsOpen={this.state.descriptionIsOpen}
          shareIsOpen={this.state.shareIsOpen}
        />
      </Modal>
    );
  }
}

HomeModal.propTypes = {
  homeItem: PropTypes.object.isRequired,
};

export default HomeModal;
