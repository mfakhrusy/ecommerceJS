import { connect } from 'react-redux';
import MenuButton from 'components/mainpage/MenuButton';
import { showSidebar } from 'actions/mainpage/mainpageActions';

const mapStateToProps = state => ({
  isSidebarOpen: state.isSidebarOpen,
});

const mapDispatchToProps = dispatch => ({
  onClick: (bool) => {
    dispatch(showSidebar(bool));
  },
});

const MenuButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuButton);

export default MenuButtonContainer;
