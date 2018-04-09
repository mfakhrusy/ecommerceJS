/* eslint-disable arrow-body-style, react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import HomeModalContent from 'components/views/home/HomeModalContent';
import HomeModalImageContainer from 'components/views/home/HomeModalImageContainer';

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      descriptionIsOpen: false,
    };
    this.showDescription = this.showDescription.bind(this);
  }

  showDescription() {
    this.setState({ descriptionIsOpen: true });
  }

  render() {
    return (
      <div className="HomeModal">
        <HomeModalImageContainer
          homeItem={this.props.homeItem}
          descriptionIsOpen={this.state.descriptionIsOpen}
        />
        <HomeModalContent
          showDescription={this.showDescription}
          homeItem={this.props.homeItem}
          descriptionIsOpen={this.state.descriptionIsOpen}
        />
      </div>
    );
  }
}

Modal.propTypes = {
  homeItem: PropTypes.object.isRequired,
};

export default Modal;
