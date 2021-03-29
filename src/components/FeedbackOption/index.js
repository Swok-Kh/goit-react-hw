import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './fedbackOption.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    const keys = Object.keys(options);
    return (
      <div className={styles.wrapper}>
        {keys.map(key => (
          <button
            key={key}
            className={styles[key]}
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key.slice(0, 1).toLocaleUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
