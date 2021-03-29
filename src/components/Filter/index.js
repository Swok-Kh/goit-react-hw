import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './filter.module.scss';

const ID = uuidv4();
const Filter = ({ value, onChangeInput }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={ID} className={styles.label}>
        Find contacts by name
      </label>
      <input
        name="filter"
        value={value}
        onChange={onChangeInput}
        id={ID}
        className={styles.input}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filter;
