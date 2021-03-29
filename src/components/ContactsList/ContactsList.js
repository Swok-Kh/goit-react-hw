import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import ContactListItem from './ContactListItem';
import {
  getfilteredContacts,
  getContactsLength,
} from '../../redux/contactsReducer';

const ContactList = ({ contacts, contactsLength }) => {
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  contactsLength: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  contacts: getfilteredContacts(state),
  contactsLength: getContactsLength(state),
});

export default connect(mapStateToProps)(ContactList);
