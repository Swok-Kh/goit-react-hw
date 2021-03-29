import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

const loaderTypeMap = {
  builtIn: styles.builtIn,
  inLine: styles.inline,
  fixed: styles.fixed,
};

const Loader = ({ type }) => {
  return (
    <div className={loaderTypeMap[type]}>
      <div className={styles.item}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.item}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.item}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.item}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.item}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};
Loader.defaultProps = {
  type: 'builtIn',
};

Loader.propTypes = {
  type: PropTypes.string,
};

export default Loader;