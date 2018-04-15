import React from 'react';
import PropTypes from 'prop-types';
import HomeModalContent from 'components/views/home/HomeModalContent';
import HomeModalImage from 'components/views/home/HomeModalImage';
import Modal from 'components/utils/Modal';

class ProfileModal extends React.Component {
  constructor() {
    super();

    this.state = {
      descriptionIsOpen: false,
    };
    this.showDescription = this.showDescription.bind(this);
  }

  showDescription(bool) {
    this.setState({ descriptionIsOpen: bool });
  }

  render() {
    return (
      <Modal className="ProfileModal">
        <HomeModalImage
          homeItem={this.props.favoriteItem}
          descriptionIsOpen={this.state.descriptionIsOpen}
        />
        <HomeModalContent
          showDescription={this.showDescription}
          homeItem={this.props.favoriteItem}
          descriptionIsOpen={this.state.descriptionIsOpen}
        />
      </Modal>
    );
  }
}

ProfileModal.propTypes = {
  favoriteItem: PropTypes.object.isRequired,
};

export default ProfileModal;
