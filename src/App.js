import React, { Component } from 'react';
import Router from './router/Router';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import { Container } from '@material-ui/core';
import Loader from './components/Loader';
import { getToken, currentUser } from './redux/userReducer';
import { getIsLoading, getError } from './redux/selectors';
class App extends Component {
  componentDidMount() {
    const { token, currentUser } = this.props;
    if (token) currentUser();
  }
  render() {
    const { loading, error } = this.props;
    return (
      <Container maxWidth="md">
        <AppBar />
        {loading && <Loader />}
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity="error">{error}</Alert>
        </Snackbar>
        <Router />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state),
  loading: getIsLoading(state),
  error: getError(state)
});

const mapDispachToProps = {
  currentUser,
};

export default connect(mapStateToProps, mapDispachToProps)(App);
