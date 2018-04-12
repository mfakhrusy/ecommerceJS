import { connect } from 'react-redux';
import ModalCommentInput from 'components/views/home/ModalCommentInput';
import { addCommentToChat } from 'actions/views/homeActions';

// const mapStateToProps = state => ({
//   isModalOpen: state.isModalOpen,
// });

const mapDispatchToProps = dispatch => ({
  addCommentToChat: (url) => {
    dispatch(addCommentToChat(url));
  },
});

const ModalCommentInputContainer = connect(
  null,
  mapDispatchToProps,
)(ModalCommentInput);

export default ModalCommentInputContainer;

