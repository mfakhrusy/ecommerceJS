import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Mainpage from 'components/mainpage/Mainpage';
import { homeFetchData } from 'actions/views/homeActions';
import { ownuserFetchData } from 'actions/views/loginActions';
import { categoriesFetchData } from 'actions/views/categoriesActions';

const mapStateToProps = state => ({
  ownuserHasErrored: state.ownuserHasErrored,
  ownuserIsLoading: state.ownuserIsLoading,
  isLogin: state.isLogin,
  categoriesHasErrored: state.categoriesHasErrored,
  categoriesIsLoading: state.categoriesIsLoading,
});

const mapDispatchToProps = dispatch => ({
  homeFetchData: (url) => {
    dispatch(homeFetchData(url));
  },
  ownuserFetchData: (url) => {
    dispatch(ownuserFetchData(url));
  },
  categoriesFetchData: (url) => {
    dispatch(categoriesFetchData(url));
  },
});

// withRouter -> so the router will work under redux
// see https://reacttraining.com/react-router/web/api/withRouter
const MainpageContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mainpage));

export default MainpageContainer;
