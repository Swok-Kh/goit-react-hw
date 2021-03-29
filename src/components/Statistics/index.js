import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.scss';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={styles.list}>
        <li>
          Good: <span className={styles.value}>{good}</span>
        </li>
        <li>
          Neutral: <span className={styles.value}>{neutral}</span>
        </li>
        <li>
          Bad: <span className={styles.value}>{bad}</span>
        </li>
        <li>
          Total: <span className={styles.value}>{total}</span>
        </li>
        <li>
          Positive feedback:{' '}
          <span className={styles.value}>{positivePercentage}%</span>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
