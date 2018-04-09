/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Avatar } from 'react-md';
import ModalCloseButtonContainer from 'containers/views/home/ModalCloseButtonContainer';

class HomeModalContent extends React.Component {
  render() {
    let content = null;
    if (this.props.descriptionIsOpen) {
      content = (
        <div className="HomeModalContentDescription">
          <ModalCloseButtonContainer />
        </div>
      );
    } else {
      content = (
        <div className="HomeModalContentMain">
          <ModalCloseButtonContainer />
          <div className="ModalImageProgress">
            i
          </div>
          <div className="ModalDescriptionButton">
            <Button
              flat
              iconChildren="chat_bubble_outline"
              onClick={this.props.showDescription}
            >
              More Info
            </Button>
          </div>
          <div className="ModalShareButton">
            <Button icon>share</Button>
          </div>
          <div className="ModalLoveButton">
            <Button icon>favorite</Button>
          </div>
          <div className="ModalInfoAvatar">
            <Avatar src={this.props.homeItem.avatarUrl} />
          </div>
          <div className="ModalInfoName">
            <p>{this.props.homeItem.name}</p>
          </div>
          <div className="ModalInfoPrice">
            <p>{this.props.homeItem.price}</p>
          </div>
          <div className="ModalTextInput">
            text input
          </div>
          <div className="ModalInterestedButton">
            int
          </div>
        </div>
      );
    }
    return (
      content
    );

    //   <div className="HomeModalContent">
    //     <ModalCloseButtonContainer />
    //     <div className="ModalImageProgress">
    //       i
    //     </div>
    //     <div className="ModalDescriptionButton">
    //       <Button
    //         flat
    //         iconChildren="chat_bubble_outline"
    //         onClick={this.props.showDescription}
    //       >
    //         More Info
    //       </Button>
    //     </div>
    //     <div className="ModalShareButton">
    //       <Button icon>share</Button>
    //     </div>
    //     <div className="ModalLoveButton">
    //       <Button icon>favorite</Button>
    //     </div>
    //     <div className="ModalInfoAvatar">
    //       <Avatar src={this.props.homeItem.avatarUrl} />
    //     </div>
    //     <div className="ModalInfoName">
    //       name
    //     </div>
    //     <div className="ModalInfoPrice">
    //       price
    //     </div>
    //     <div className="ModalTextInput">
    //       text input
    //     </div>
    //     <div className="ModalInterestedButton">
    //       int
    //     </div>
    //   </div>
  }
}

HomeModalContent.propTypes = {
  homeItem: PropTypes.object.isRequired,
  showDescription: PropTypes.func.isRequired,
  descriptionIsOpen: PropTypes.bool.isRequired,
};

export default HomeModalContent;
