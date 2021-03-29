import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './contactForm.module.scss';

const NAME_ID = uuidv4();
const NUMBER_ID = uuidv4();

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
    const { handleSubmit } = this.props;
    handleSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitForm} className={styles.wrapper}>
        <label htmlFor={NAME_ID} className={styles.label}>
          Name
        </label>
        <input
          name="name"
          type="text"
          onChange={this.handleInput}
          value={this.state.name}
          id={NAME_ID}
          className={styles.input}
        />
        <label htmlFor={NUMBER_ID} className={styles.label}>
          Number
        </label>
        <input
          name="number"
          type="text"
          onChange={this.handleInput}
          value={this.state.number}
          id={NUMBER_ID}
          className={styles.input}
        />
        <button className={styles.button}>Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
