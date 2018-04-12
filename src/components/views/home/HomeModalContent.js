/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Avatar } from 'react-md';
import ModalCloseButtonContainer from 'containers/views/home/ModalCloseButtonContainer';
import ModalLoveButtonContainer from 'containers/views/home/ModalLoveButtonContainer';
import ModalInfoPrice from 'components/views/home/ModalInfoPrice';
import ModalCommentInput from 'components/views/home/ModalCommentInput';

class HomeModalContent extends React.Component {
  render() {
    let content = null;
    if (this.props.descriptionIsOpen) {
      content = (
        <div className="HomeModalContentDescription">
          <ModalCloseButtonContainer />
          <div className="ModalBackButton">
            <Button
              icon
              onClick={() => { this.props.showDescription(false); }}
            >
              arrow_back
            </Button>
          </div>
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
              onClick={() => { this.props.showDescription(true); }}
            >
              More Info
            </Button>
          </div>
          <div className="ModalShareButton">
            <Button icon>share</Button>
          </div>
          <ModalLoveButtonContainer homeItem={this.props.homeItem} />
          <div className="ModalInfoAvatar">
            <Avatar src={this.props.homeItem.avatarUrl} />
          </div>
          <div className="ModalInfoName">
            <p>{this.props.homeItem.name}</p>
          </div>
          <ModalInfoPrice price={this.props.homeItem.price} />
          <ModalCommentInput homeItem={this.props.homeItem} />
          <div className="ModalInterestedButton">
            int
          </div>
        </div>
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
  descriptionIsOpen: PropTypes.bool.isRequired,
};

export default HomeModalContent;
