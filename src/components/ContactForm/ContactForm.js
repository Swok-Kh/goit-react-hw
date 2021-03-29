import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact, getAllContacts } from '../../redux/contacts';
import { withNotify } from '../Notify';
import Button from '../UI/Button';

import styles from './contactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInput = e => {
    const changedValues = { [e.target.name]: e.target.value };
    this.setState(prevState => {
      const nextState = { ...prevState, ...changedValues };

      return nextState;
    });
  };
  onSubmitForm = e => {
    e.preventDefault();
    const {
      contacts,
      addContact,
      notify: { addMessage },
    } = this.props;
    const { name, number } = this.state;
    if (name === '') {
      addMessage('Input is empty', { type: 'warning' });
      return;
    }
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
      )
    ) {
      addMessage(`${name} is already in contacts`);
      return;
    }
    addContact({ name, number });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitForm} className={styles.wrapper}>
        <label htmlFor="contact-name" className={styles.label}>
          Name
        </label>
        <input
          name="name"
          type="text"
          onChange={this.handleInput}
          value={this.state.name}
          id="contact-name"
          className={styles.input}
          placeholder=" "
        />
        <label htmlFor="contact-number" className={styles.label}>
          Number
        </label>
        <input
          name="number"
          type="text"
          onChange={this.handleInput}
          value={this.state.number}
          id="contact-number"
          className={styles.input}
          placeholder=" "
        />
        <Button className={styles.button}>Add contact</Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  notify: PropTypes.shape({
    addMessage: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});
const mapDispatchToProps = {
  addContact,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNotify(ContactForm));
