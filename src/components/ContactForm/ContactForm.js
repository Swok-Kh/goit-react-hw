import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField, Button, Box, Paper, Grid } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import {
  addContact,
  getAllContacts,
  addContactError,
} from '../../redux/contactsReducer';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    isNameEmpty: false,
    isNumberEmpty: false,
  };
  handleInput = e => {
    const changedValues = {
      [e.target.id]: e.target.value,
      isNameEmpty: false,
      isNumberEmpty: false,
    };
    this.setState(prevState => ({ ...prevState, ...changedValues }));
  };
  onSubmitForm = e => {
    e.preventDefault();
    const { contacts, addContact, addContactError } = this.props;
    const { name, number } = this.state;
    if (name === '') {
      this.setState(() => ({ isNameEmpty: true }));

      return;
    }
    if (number === '') {
      this.setState(() => ({ isNumberEmpty: true }));

      return;
    }
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
      )
    ) {
      addContactError(`${name} is already in contacts`);
      return;
    }
    addContact({ name, number });
    this.setState({
      name: '',
      number: '',
      isNameEmpty: false,
      isNumberEmpty: false,
    });
  };
  render() {
    const { name, number, isNumberEmpty, isNameEmpty } = this.state;
    return (
      <Paper elevation={3}>
        <Box padding={1}>
          <form onSubmit={this.onSubmitForm}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={this.handleInput}
                  error={isNameEmpty ? true : false}
                  helperText={isNameEmpty && 'Enter name'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="number"
                  label="Number"
                  variant="outlined"
                  value={number}
                  onChange={this.handleInput}
                  error={isNumberEmpty ? true : false}
                  helperText={isNumberEmpty && 'Enter number'}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  endIcon={<AddCircleOutline />}
                >
                  Add contact
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  addContact: PropTypes.func.isRequired,
  addContactError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});
const mapDispatchToProps = {
  addContact,
  addContactError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
