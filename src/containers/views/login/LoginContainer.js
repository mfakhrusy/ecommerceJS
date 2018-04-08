import { connect } from 'react-redux';
import Login from 'components/views/login/Login';
import { ownuserFetchData } from 'actions/views/loginActions';
import { categoriesFetchData } from 'actions/views/categoriesActions';

// const mapStateToProps = state => ({
//   ownuser: state.ownuser,
//   ownuserHasErrored: state.ownuserHasErrored,
//   ownuserIsLoading: state.ownuserIsLoading,
// });

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => {
    dispatch(ownuserFetchData(url));
  },
  categoriesfetchData: (url) => {
    dispatch(categoriesFetchData(url));
  },
});

const LoginContainer = connect(
  null,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
