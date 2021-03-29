import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';
import {
  getfilteredContacts,
  getContactsLength,
} from '../../redux/contactsReducer';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getfilteredContacts);
  const contactsLength = useSelector(getContactsLength);

  return (
    <List>
      {contacts && contactsLength ? (
        contacts.map(contact => (
          <ContactListItem key={contact.id} user={contact} />
        ))
      ) : (
        <ContactListItem key={'no-users'} />
      )}
    </List>
  );
};

export default ContactList;
