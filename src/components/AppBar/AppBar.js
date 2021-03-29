import {
  AppBar as MuiAppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AuthBar from '../AuthBar';
import UserBar from '../UserBar';
import { useUserLogin } from '../../hooks';

const AppBar = () => {
  const { isLogin, token } = useUserLogin();
  return (
    <MuiAppBar position="fixed">
      <Container maxWidth="md">
        <Toolbar>
          {isLogin ? (
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

export default AppBar;
