import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './movieList.module.scss';
import paths from '../../Router/paths';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.block}>
      {movies.map(({ id, name, title }) => (
        <li key={id} className={styles.item}>
          <NavLink
            to={{
              pathname: `${paths.MOVIES_ID(id)}`,
              state: { from: location },
            }}
            className={styles.link}
          >
            {title || name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default withRouter(MoviesList);
