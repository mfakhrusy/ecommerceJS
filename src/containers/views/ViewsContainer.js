import { connect } from 'react-redux';
import Views from 'components/views/Views';
import { showSidebar } from 'actions/mainpage/mainpageActions';

const mapStateToProps = state => ({
  isSidebarOpen: state.isSidebarOpen,
});

const mapDispatchToProps = dispatch => ({
  onClick: (bool) => {
    dispatch(showSidebar(bool));
  },
});

const ViewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Views);

export default ViewsContainer;
