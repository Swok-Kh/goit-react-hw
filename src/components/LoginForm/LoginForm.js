import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userReducer';
import paths from '../../router/paths';
import { useFormInput } from '../../hooks';

const useStyles = makeStyles({ link: { textDecoration: 'none' } });

const LoginForm = () => {
  const [email, setEmail, isEmailError, setIsEmailError] = useFormInput('');
  const [
    password,
    setPassword,
    isPasswordError,
    setIsPasswordError,
  ] = useFormInput('');
  const dispach = useDispatch();
  const styles = useStyles();

  const onSubmit = async e => {
    e.preventDefault();
    if (email === '') {
      setIsEmailError(true);

      return;
    }
    if (password === '') {
      setIsPasswordError(true);

      return;
    }
    dispach(loginUser({ email: email, password: password }));
  };

  return (
    <Paper elevation={3}>
      <Box p={1}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
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
                error={isPasswordError}
                helperText={isPasswordError && 'Enter password'}
              />
            </Grid>
            <Grid item xs={6}>
              <Link to={paths.REGISTER} className={styles.link}>
                <Button fullWidth variant="outlined" color="primary">
                  Or Signup
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
                LogIn
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default LoginForm;
