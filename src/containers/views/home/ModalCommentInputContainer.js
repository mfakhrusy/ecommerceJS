import { connect } from 'react-redux';
import ModalCommentInput from 'components/views/home/ModalCommentInput';
import { addCommentToChat } from 'actions/views/homeActions';

const mapStateToProps = state => ({
  chats: state.chats,
});

const mapDispatchToProps = dispatch => ({
  addCommentToChat: (url) => {
    dispatch(addCommentToChat(url));
  },
});

const ModalCommentInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCommentInput);

export default ModalCommentInputContainer;

