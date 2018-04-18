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
  ownuserFetchData: (url) => {
    dispatch(ownuserFetchData(url));
  },
  categoriesFetchData: (url) => {
    dispatch(categoriesFetchData(url));
  },
});

const LoginContainer = connect(
  null,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
