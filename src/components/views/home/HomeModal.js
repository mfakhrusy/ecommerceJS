import React from 'react';
import PropTypes from 'prop-types';
import HomeModalContent from 'components/views/home/HomeModalContent';
import HomeModalImageContainer from 'components/views/home/HomeModalImageContainer';
import Modal from 'components/utils/Modal';

class HomeModal extends React.Component {
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
      <Modal className="HomeModal">
        <HomeModalImageContainer
          homeItem={this.props.homeItem}
          descriptionIsOpen={this.state.descriptionIsOpen}
        />
        <HomeModalContent
          showDescription={this.showDescription}
          homeItem={this.props.homeItem}
          descriptionIsOpen={this.state.descriptionIsOpen}
        />
      </Modal>
    );
  }
}

HomeModal.propTypes = {
  homeItem: PropTypes.object.isRequired,
};

export default HomeModal;
