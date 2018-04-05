import { connect } from 'react-redux';
import MenuButton from 'components/homepage/MenuButton';
import { showSidebar } from 'actions/homepageActions';

const mapStateToProps = state => ({
  isSidebarShown: state.isSidebarShown,
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
