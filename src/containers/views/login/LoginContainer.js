import { connect } from 'react-redux';
import Login from 'components/views/login/Login';
import { ownuserFetchData } from 'actions/views/loginActions';

// const mapStateToProps = state => ({
//   ownuser: state.ownuser,
//   ownuserHasErrored: state.ownuserHasErrored,
//   ownuserIsLoading: state.ownuserIsLoading,
// });

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => {
    dispatch(ownuserFetchData(url));
  },
});

const LoginContainer = connect(
  null,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
