import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

class ModalCommentInput extends Component {
  constructor() {
    super();
    this.updateComment = this.updateComment.bind(this);
    this.state = {
      comment: '',
    };
  }

  handleClick(id, createdAt, name, avatarUrl, imageUrl, comment) {
    // TODO add a condition when the data still hasn't been downloaded
    // but user has already submitted comment
    this.props.addCommentToChat(id, name, createdAt, avatarUrl, imageUrl, comment);
  }

  updateComment(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    const { homeItem, chats } = this.props;
    // get last id of chats
    let lastId = null;
    // to make sure it's downloaded properly first
    // TODO change this to a more smart solution
    if (chats.length > 0) {
      lastId = Number(chats[chats.length - 1].id) + 1;
    }

    return (
      <div className="ModalCommentInput">
        <input
          name="comment-input"
          type="text"
          placeholder="Ask them something!"
          onChange={(event) => { this.updateComment(event); }}
          value={this.state.comment}
        />
        <Button
          icon
          onClick={() => {
            this.handleClick(
              lastId,
              homeItem.username,
              homeItem.createdAt,
              homeItem.avatarUrl,
              homeItem.imageUrl,
              this.state.comment,
            );
          }}
        >
          insert_comment
        </Button>
      </div>
    );
  }
}

ModalCommentInput.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeItem: PropTypes.object.isRequired,
  addCommentToChat: PropTypes.func.isRequired,
};

export default ModalCommentInput;
