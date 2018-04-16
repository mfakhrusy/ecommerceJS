import React from 'react';
import PropTypes from 'prop-types';
// import { Button, Avatar } from 'react-md';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
import ModalCloseButtonContainer from 'containers/views/home/ModalCloseButtonContainer';
import ModalLoveButtonContainer from 'containers/views/home/ModalLoveButtonContainer';
import ModalInfoPrice from 'components/views/home/ModalInfoPrice';
import ModalCommentInputContainer from 'containers/views/home/ModalCommentInputContainer';

class HomeModalContentMain extends React.Component {
  render() {
    // todo change the API call into more responsive and friendly
    // perhaps use redux action + async call for that
    return (
      <div className="HomeModalContent HomeModalContentMain">
        <ModalCloseButtonContainer />
        <div className="ModalDescriptionButton">
          <Button
            flat
            iconChildren="chat_bubble_outline"
            onClick={() => { this.props.showDescription(true); }}
          >
            More Info
          </Button>
        </div>
        {/* <div className="ModalShareButton">
          <Button
            icon
            onClick={() => { this.props.showShare(true); }}
          >
            share
          </Button>
        </div> */}
        <ModalLoveButtonContainer homeItem={this.props.homeItem} />
        <div className="ModalInfoAvatar">
          <Avatar src={this.props.homeItem.avatarUrl} />
        </div>
        <div className="ModalInfoName">
          <p>{this.props.homeItem.name}</p>
        </div>
        <ModalInfoPrice price={this.props.homeItem.price} />
        <ModalCommentInputContainer homeItem={this.props.homeItem} />
      </div>
    );
  }
}

HomeModalContentMain.propTypes = {
  homeItem: PropTypes.object.isRequired,
  showDescription: PropTypes.func.isRequired,
  // showShare: PropTypes.func.isRequired,
};

export default HomeModalContentMain;
