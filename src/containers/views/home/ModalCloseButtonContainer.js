import { connect } from 'react-redux';
import ModalCloseButton from 'components/views/home/ModalCloseButton';
import { showModal } from 'actions/globalActions';

const mapStateToProps = state => ({
  isModalOpen: state.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  onClick: (url) => {
    dispatch(showModal(url));
  },
});

const ModalCloseButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCloseButton);

export default ModalCloseButtonContainer;
