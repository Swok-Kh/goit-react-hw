import PropTypes from 'prop-types';
import {
  AppBar as MuiAppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AuthBar from '../AuthBar';
import UserBar from '../UserBar';
import withUserLogin from '../../router/withUserLogin';

const AppBar = ({ isUserLogin, token }) => {
  return (
    <MuiAppBar position="fixed">
      <Container maxWidth="md">
        <Toolbar>
          {isUserLogin ? (
            <UserBar />
          ) : token ? (
            <Box ml="auto">
              <Typography>Updating user session...</Typography>
            </Box>
          ) : (
            <AuthBar />
          )}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  isUserLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};

export default withUserLogin(AppBar);
