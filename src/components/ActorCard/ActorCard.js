import React from 'react';
import PropTypes from 'prop-types';
import Image from '../UI/Image';
import styles from './actorCard.module.scss';

const ActorCard = ({ actor }) => {
  const { name, character, profile_path } = actor;
  return (
    <li className={styles.item}>
      <Image src={profile_path} alt={name} />
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.character}>Character: {character}</p>
      </div>
    </li>
  );
};
ActorCard.defaultProps = {
  character: 'No info',
};
ActorCard.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
    profile_path: PropTypes.string,
  }).isRequired,
};

export default ActorCard;
