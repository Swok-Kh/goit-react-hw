import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactList.module.scss';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.wrapper}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button id={id} className={styles.button} onClick={onDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
