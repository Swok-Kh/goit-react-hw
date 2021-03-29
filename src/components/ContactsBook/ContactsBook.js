import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { fetchAllContacts } from '../../redux/contactsReducer';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';

const ContactsBook = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchAllContacts());
  }, [dispach]);

  return (
    <>
      <ContactForm />
      <Typography color="primary" component="h2" variant="h4">
        Contacts
      </Typography>
      <ContactsFilter />
      <ContactsList />
    </>
  );
};

export default ContactsBook;
