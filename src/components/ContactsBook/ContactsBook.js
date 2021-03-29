import { CSSTransition } from 'react-transition-group';

import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';
import Title, { titleTypesMap } from '../UI/Title';

import styles from './contactsBook.module.scss';
import translateStyles from '../../scss/transition/translate.module.scss';

const ContactsBook = () => {
  return (
    <div className={styles.card}>
      <CSSTransition
        in
        appear
        classNames={translateStyles}
        timeout={250}
        unmountOnExit
      >
        <Title className={styles.title}>Phonebook</Title>
      </CSSTransition>
      <ContactForm />
      <Title type={titleTypesMap.secondary}>Contacts</Title>
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};

export default ContactsBook;
