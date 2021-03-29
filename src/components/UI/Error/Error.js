import PropTypes from 'prop-types';
import styles from './error.module.scss';

const Error = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;