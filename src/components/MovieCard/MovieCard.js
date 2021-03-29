import React from 'react';
import PropTypes from 'prop-types';
import Image from '../UI/Image';
import styles from './movieCard.module.scss';

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  const year = new Date(release_date).getFullYear();
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={poster_path} alt={title} width="500" />
      </div>
      <div className={styles.description}>
        <h2 className={styles.main_title}>
          {title} ({year})
        </h2>
        <p className={styles.score}>Users score: {vote_average * 10}%</p>
        <h3 className={styles.title}>Overwiev</h3>
        <p className={styles.overview}>{overview}</p>
        <h3 className={styles.title}>Genres</h3>
        <ul className={styles.ganres}>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

export default MovieCard;
