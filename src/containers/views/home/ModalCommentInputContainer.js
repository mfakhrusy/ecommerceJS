import { connect } from 'react-redux';
import ModalCommentInput from 'components/views/home/ModalCommentInput';
import { addCommentToChat } from 'actions/views/homeActions';

const mapStateToProps = state => ({
  chats: state.chats,
});

const mapDispatchToProps = dispatch => ({
  addCommentToChat: (id, name, createdAt, avatarUrl, imageUrl, comment) => {
    dispatch(addCommentToChat(id, name, createdAt, avatarUrl, imageUrl, comment));
  },
});

const ModalCommentInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCommentInput);

export default ModalCommentInputContainer;

