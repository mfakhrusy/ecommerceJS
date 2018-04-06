import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Mainpage from 'components/mainpage/Mainpage';

const mapStateToProps = state => ({
  ownuserHasErrored: state.ownuserHasErrored,
  ownuserIsLoading: state.ownuserIsLoading,
  isLogin: state.isLogin,
});

// withRouter -> so the router will work under redux
// see https://reacttraining.com/react-router/web/api/withRouter
const MainpageContainer = withRouter(connect(
  mapStateToProps,
)(Mainpage));

export default MainpageContainer;
