import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import paths from '../../router/paths';
import { registerUser } from '../../redux/userReducer';

class RegistrationForm extends Component {
  state = {
    userName: '',
    userMail: '',
    userPassword: '',
    userPasswordConfirm: '',
    isPasswordsNoMach: false,
    isUserEmpty: false,
    isMailEmpty: false,
  };
  handleInput = e => {
    this.setState(() => ({
      [e.target.id]: e.target.value,
      isPasswordsNoMach: false,
      isUserEmpty: false,
      isMailEmpty: false,
    }));
  };
  onSubmit = async e => {
    e.preventDefault();
    const {
      userPassword,
      userPasswordConfirm,
      userName,
      userMail,
    } = this.state;
    const { registerUser } = this.props;
    if (userName === '') {
      this.setState(() => ({ isUserEmpty: true }));
      return;
    }
    if (userMail === '') {
      this.setState(() => ({ isMailEmpty: true }));
      return;
    }
    if (userPassword !== userPasswordConfirm) {
      this.setState(() => ({ isPasswordsNoMach: true }));

      return;
    }
    registerUser({ name: userName, email: userMail, password: userPassword });
  };
  render() {
    const {
      userName,
      isUserEmpty,
      userMail,
      isMailEmpty,
      userPassword,
      isPasswordsNoMach,
      userPasswordConfirm,
    } = this.state;
    const { history } = this.props;
    return (
      <Paper elevation={3}>
        <Box p={1}>
          <form onSubmit={this.onSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="userName"
                  label="User name"
                  variant="outlined"
                  value={userName}
                  onChange={this.handleInput}
                  error={isUserEmpty}
                  helperText={isUserEmpty && 'Enter user'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="userMail"
                  label="User email"
                  variant="outlined"
                  type="email"
                  value={userMail}
                  onChange={this.handleInput}
                  error={isMailEmpty}
                  helperText={isMailEmpty && 'Enter email'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="userPassword"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={userPassword}
                  onChange={this.handleInput}
                  error={isPasswordsNoMach}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="userPasswordConfirm"
                  label="Confirm password"
                  variant="outlined"
                  type="password"
                  value={userPasswordConfirm}
                  onChange={this.handleInput}
                  error={isPasswordsNoMach}
                  helperText={isPasswordsNoMach && 'Password mismatch'}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    history.push(paths.LOGIN);
                  }}
                >
                  Or Login
                </Button>
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
  }
}

const mapDispachToProps = {
  registerUser,
};

export default connect(null, mapDispachToProps)(withRouter(RegistrationForm));
