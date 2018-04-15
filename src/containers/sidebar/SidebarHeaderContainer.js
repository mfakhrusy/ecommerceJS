import { connect } from 'react-redux';
import SidebarHeader from 'components/sidebar/SidebarHeader';

const mapStateToProps = state => ({
  ownuser: state.ownuser,
});

const SidebarHeaderContainer = connect(
  mapStateToProps,
)(SidebarHeader);

export default SidebarHeaderContainer;
