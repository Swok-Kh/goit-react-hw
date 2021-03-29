import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core';
import paths from '../../router/paths';
import { registerUser } from '../../redux/userReducer';
import { useFormInput } from '../../hooks';

const useStyles = makeStyles({ link: { textDecoration: 'none' } });

const RegistrationForm = () => {
  const [name, setName, isNameError, setIsNameError] = useFormInput('');
  const [email, setEmail, isEmailError, setIsEmailError] = useFormInput('');
  const [
    password,
    setPassword,
    isPasswordError,
    setIsPasswordError,
  ] = useFormInput('');
  const [confirmPassword, setConfirmPassword] = useFormInput('');
  const [isPasswordsNoMach, setIsPasswordsNoMach] = useState(false);

  const dispach = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    if (password !== confirmPassword) setIsPasswordsNoMach(true);
    else setIsPasswordsNoMach(false);
  }, [password, confirmPassword]);

  const onSubmit = async e => {
    e.preventDefault();
    if (name === '') {
      setIsNameError(true);

      return;
    }
    if (email === '') {
      setIsEmailError(true);

      return;
    }
    if (password === '') {
      setIsPasswordError(true);

      return;
    }

    dispach(registerUser({ name, email, password }));
  };

  return (
    <Paper elevation={3}>
      <Box p={1}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                label="User name"
                variant="outlined"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
                error={isNameError}
                helperText={isNameError && 'Enter user'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="User email"
                variant="outlined"
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                error={isEmailError}
                helperText={isEmailError && 'Enter email'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                error={isPasswordsNoMach || isPasswordError}
                helperText={isPasswordError && 'Enter password'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="confirmPassword"
                label="Confirm password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={e => {
                  setConfirmPassword(e.target.value);
                }}
                error={isPasswordsNoMach}
                helperText={isPasswordsNoMach && 'Password mismatch'}
              />
            </Grid>
            <Grid item xs={6}>
              <Link to={paths.LOGIN} className={styles.link}>
                <Button fullWidth variant="outlined" color="primary">
                  Or Login
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Signup
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default RegistrationForm;
