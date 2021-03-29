import React from 'react';
import PropTypes from 'prop-types';
import styles from './rewiewCard.module.scss';

const RewiewCard = ({ rewiew }) => {
  const { id, author, content } = rewiew;
  return (
    <li className={styles.item} key={id}>
      <h3 className={styles.title}>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

RewiewCard.propTypes = {
  rewiew: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default RewiewCard;
