import React from 'react';
import PropTypes from 'prop-types';
import HomeModalContent from 'components/views/home/HomeModalContent';
import HomeModalImageContainer from 'components/views/home/HomeModalImageContainer';
import Modal from 'components/utils/Modal';
// import urls from 'constants/urls';

class HomeModal extends React.Component {
  constructor() {
    super();

    this.state = {
      descriptionIsOpen: false,
    };
    this.showDescription = this.showDescription.bind(this);
  }

  // componentDidMount() {
  //   this.props.chatsfetchData(urls.chats.url);
  // }

  showDescription(bool) {
    this.setState({ descriptionIsOpen: bool });
  }

  render() {
    // console.log(this.props.chats)
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
  // chats: PropTypes.arrayOf(PropTypes.object).isRequired,
  // chatsfetchData: PropTypes.func.isRequired,
};

export default HomeModal;
