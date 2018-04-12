import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'react-md';

class ModalCommentInput extends Component {
  // constructor() {
  //   super();
  //   // this.addCommentToChat = this.addCommentToChat.bind(this);
  //   // this.updateComment = this.updateComment.bind(this);
  //   this.state = {
  //     comment: '',
  //   };
  // }

  // handleClick(username, createdAt, avatarUrl, imageUrl, comment) {
  //   this.props.addCommentToChat(username, createdAt, avatarUrl, imageUrl, comment);
  // }

  // updateComment(text) {
  //   this.setState({ comment: text });
  // }

  render() {
    // const { homeItem } = this.props;
    return (
      <div className="ModalCommentInput">
        <input
          name="comment-input"
          type="text"
          placeholder="Ask them something!"
          // value={this.state.comment}
        />
        <Button
          icon
          // onClick={() => {
          //   this.handleClick(
          //     homeItem.username,
          //     homeItem.createdAt,
          //     homeItem.avatarUrl,
          //     homeItem.imageUrl,
          //     this.state.comment,
          //   );
          // }}
        >
          insert_comment
        </Button>
      </div>
    );
  }
}

// ModalCommentInput.propTypes = {
//   // homeItem: PropTypes.string.isRequired,
//   addCommentToChat: PropTypes.func.isRequired,
// };

export default ModalCommentInput;
