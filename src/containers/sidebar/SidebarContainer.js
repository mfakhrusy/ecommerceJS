import { connect } from 'react-redux';
import Sidebar from 'components/sidebar/Sidebar';
import { showSidebar } from 'actions/mainpage/mainpageActions';

const mapStateToProps = state => ({
  isSidebarOpen: state.isSidebarOpen,
});

const mapDispatchToProps = dispatch => ({
  onClick: (bool) => {
    dispatch(showSidebar(bool));
  },
});

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);

export default SidebarContainer;
