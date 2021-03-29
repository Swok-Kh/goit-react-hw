import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Box } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { getUserName, logoutUser } from '../../redux/userReducer';

const UserBar = () => {
  const userName = useSelector(getUserName)
  const dispach = useDispatch()
  return (
    <>
      <Box ml="auto">
        <Typography>Welcome, {userName}</Typography>
      </Box>
      <Box ml={1}>
        <Button
          onClick={() => dispach(logoutUser())}
          variant="outlined"
          color="inherit"
          endIcon={<ExitToApp />}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default UserBar;
