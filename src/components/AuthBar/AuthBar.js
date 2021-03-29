import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Box, Button, makeStyles } from '@material-ui/core';
import { Person, PersonAdd } from '@material-ui/icons';
import paths from '../../router/paths';

const useStyles = makeStyles({
  link: { textDecoration: 'none', color: 'inherit' },
});

const AuthBar = () => {
  const { pathname } = useLocation();
  const styles = useStyles();
  return (
    <>
      <Box ml="auto">
        <Link to={paths.LOGIN} className={styles.link}>
          <Button
            variant={pathname === paths.LOGIN ? 'outlined' : 'text'}
            color="inherit"
            endIcon={<Person />}
          >
            Login
          </Button>
        </Link>
      </Box>
      <Box ml={1}>
        <Link to={paths.REGISTER} className={styles.link}>
          <Button
            variant={pathname === paths.REGISTER ? 'outlined' : 'text'}
            color="inherit"
            endIcon={<PersonAdd />}
          >
            Signup
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default AuthBar;
