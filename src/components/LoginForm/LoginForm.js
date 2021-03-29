import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/userReducer';
import paths from '../../router/paths';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isEmailEmpty: false,
    isPasswordEmpty: false,
  };
  handleInput = e => {
    this.setState(() => ({
      [e.target.id]: e.target.value,
      isEmailEmpty: false,
      isPasswordEmpty: false,
    }));
  };
  onSubmit = async e => {
    const { email, password } = this.state;
    const { loginUser } = this.props;
    e.preventDefault();
    if (email === '') {
      this.setState(() => ({ isEmailEmpty: true }));

      return;
    }
    if (password === '') {
      this.setState(() => ({ isPasswordEmpty: true }));

      return;
    }
    loginUser({ email: email, password: password });
  };
  render() {
    const { email, isEmailEmpty, password, isPasswordEmpty } = this.state;
    const { history } = this.props;
    return (
      <Paper elevation={3}>
        <Box p={1}>
          <form onSubmit={this.onSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={this.handleInput}
                  error={isEmailEmpty}
                  helperText={isEmailEmpty && 'Enter email'}
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
                  onChange={this.handleInput}
                  error={isPasswordEmpty}
                  helperText={isPasswordEmpty && 'Enter password'}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    history.push(paths.REGISTER);
                  }}
                >
                  Or Signup
                </Button>
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
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapDispachToProps = {
  loginUser,
};

export default connect(null, mapDispachToProps)(withRouter(LoginForm));
