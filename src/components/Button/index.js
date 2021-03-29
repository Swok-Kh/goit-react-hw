import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onClick, ...restProps }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.load}
      {...restProps}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
