import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';
import Title from '../UI/Title';
import { withNotify } from '../Notify';
import styles from './contactsBook.module.scss';
import translateStyles from '../../scss/transition/translate.module.scss';

class ContactsBook extends Component {
  state = {
    filter: '',
    contacts: [],
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState(() => ({ contacts: [...JSON.parse(contacts)] }));
    }
  }
  componentDidUpdate() {
    const contacts = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', contacts);
  }
  handleFilterInput = e => {
    const filter = e.target.value;
    this.setState({ filter });
  };
  handleSubmit = obj => {
    const { contacts } = this.state;
    const { name, number } = obj;
    const { addMessage } = this.props.notify;
    if (obj.name === '') {
      addMessage('Input is empty', { type: 'warning' });
      return;
    }
    if (contacts)
      if (
        contacts.find(
          contact =>
            contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
        )
      ) {
        addMessage(`${name} is already in contacts`);
        return;
      }

    const newContact = { id: uuidv4(), name, number };
    this.setState(prevState => {
      return prevState.contacts.length !== 0
        ? { contacts: [newContact, ...prevState.contacts] }
        : { contacts: [newContact] };
    });
  };
  handleFilter() {
    const { filter, contacts } = this.state;

    return filter
      ? contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      )
      : contacts;
  }
  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
      };
    });
  };
  render() {
    const { filter, contacts } = this.state;
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
        <ContactForm handleSubmit={this.handleSubmit} />
        <Title type="secondary">Contacts</Title>
        <CSSTransition
          in={contacts.length > 1}
          appear
          classNames={translateStyles}
          timeout={250}
          unmountOnExit
        >
          <ContactsFilter
            value={filter}
            onChangeInput={this.handleFilterInput}
          />
        </CSSTransition>
        <ContactsList contacts={this.handleFilter()} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default withNotify(ContactsBook);
