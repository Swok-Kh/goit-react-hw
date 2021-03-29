import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';
import paths from '../../Router/paths';

const Navigation = () => {
  return (
    <nav className={styles.block}>
      <div className={styles.container}>
        <NavLink
          exact
          to={paths.MAIN}
          className={styles.link}
          activeClassName={styles.active}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to={paths.MOVIES}
          className={styles.link}
          activeClassName={styles.active}
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;