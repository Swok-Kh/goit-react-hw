import React, { useEffect } from 'react';
import Router from './router/Router';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import { Container } from '@material-ui/core';
import Loader from './components/Loader';
import { getToken, currentUser } from './redux/userReducer';
import { getIsLoading, getError } from './redux/selectors';

const App = () => {
  const token = useSelector(getToken);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispach = useDispatch();

  useEffect(() => {
    if (token) dispach(currentUser());
  }, [dispach, token]);

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
};

export default App;
