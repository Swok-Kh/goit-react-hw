import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import styles from './app.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleFilterInput = e => {
    const filter = e.target.value;
    this.setState({ filter });
  };
  handleSubmit = obj => {
    const { contacts } = this.state;
    if (obj.name === '') {
      alert('Input is empty');
      return;
    }
    if (contacts.find(({ name }) => name === obj.name)) {
      alert(`${obj.name} is already in contacts`);
      return;
    }

    const newContact = { id: uuidv4(), name: obj.name, number: obj.number };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
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
  onDelete = e => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(({ id }) => id !== e.target.id),
        ],
      };
    });
  };
  render() {
    const { filter } = this.state;
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter} onChangeInput={this.handleFilterInput} />
        <ContactList contacts={this.handleFilter()} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
