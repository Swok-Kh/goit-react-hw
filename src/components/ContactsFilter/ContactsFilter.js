import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './contactsFilter.module.scss';

const ID = uuidv4();
const ContactsFilter = ({ value, onChangeInput }) => {
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
        autoComplete="off"
      />
    </div>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default ContactsFilter;
