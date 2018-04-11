import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'react-md';

class ModalCommentInput extends Component {
  render() {
    return (
      <div className="ModalCommentInput">
        <input
          name="comment-input"
          type="text"
          placeholder="Ask them something!"
        />
        <Button icon>insert_comment</Button>
      </div>
    );
  }
}

// ModalCommentInput.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default ModalCommentInput;
