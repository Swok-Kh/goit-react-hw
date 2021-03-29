import { withRouter } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { Person, PersonAdd } from '@material-ui/icons';
import paths from '../../router/paths';

const AuthBar = ({ history, location }) => {
  const { pathname } = location;
  return (
    <>
      <Box ml="auto">
        <Button
          variant={pathname === paths.LOGIN ? 'outlined' : 'text'}
          color="inherit"
          onClick={() => {
            history.push(paths.LOGIN);
          }}
          endIcon={<Person />}
        >
          Login
        </Button>
      </Box>
      <Box ml={1}>
        <Button
          variant={pathname === paths.REGISTER ? 'outlined' : 'text'}
          color="inherit"
          onClick={() => {
            history.push(paths.REGISTER);
          }}
          endIcon={<PersonAdd />}
        >
          Signup
        </Button>
      </Box>
    </>
  );
};

export default withRouter(AuthBar);
