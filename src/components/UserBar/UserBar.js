import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Typography, Box } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { getUserName, logoutUser } from '../../redux/userReducer';

const UserBar = ({ userName, logoutUser }) => {
  return (
    <>
      <Box ml="auto">
        <Typography>Welcome, {userName}</Typography>
      </Box>
      <Box ml={1}>
        <Button
          onClick={logoutUser}
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

UserBar.propTypes = {
  userName: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userName: getUserName(state),
});
const mapDispachToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispachToProps)(UserBar);
