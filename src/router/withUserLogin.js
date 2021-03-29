import { connect } from 'react-redux';
import { isUserLogin, getToken } from '../redux/userReducer';

const withUserLogin = WrappedComponent => {
  const WithUserLogin = props => {
    return <WrappedComponent {...props} />;
  };
  const mapStateToProps = state => ({
    isUserLogin: isUserLogin(state),
    token: getToken(state),
  });

  return connect(mapStateToProps)(WithUserLogin);
};

export default withUserLogin;
