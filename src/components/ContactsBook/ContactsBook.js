import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';
import { fetchAllContacts } from '../../redux/contactsReducer';
class ContactsBook extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }
  render() {
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
  }
}

ContactsBook.propTypes = {
  fetchAllContacts: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchAllContacts,
};

export default connect(null, mapDispatchToProps)(ContactsBook);
