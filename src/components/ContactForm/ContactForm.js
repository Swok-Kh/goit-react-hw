import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Box, Paper, Grid } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import {
  addContact,
  getAllContacts,
  addContactError,
} from '../../redux/contactsReducer';
import InputMask from 'react-input-mask';
import { useFormInput } from '../../hooks';

const ContactForm = () => {
  const [name, handleNameInput, isNameError, setIsNameError] = useFormInput('');
  const [
    number,
    handleNumberInput,
    isNumberError,
    setIsNumberError,
  ] = useFormInput('');

  const contacts = useSelector(getAllContacts);
  const dispach = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    if (name === '') {
      setIsNameError(true);

      return;
    }
    if (number === '') {
      setIsNumberError(true);

      return;
    }
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
      )
    ) {
      dispach(addContactError(`${name} is already in contacts`));
      return;
    }
    dispach(addContact({ name, number }));

    handleNameInput('');
    handleNumberInput('');
  };
  return (
    <Paper elevation={3}>
      <Box padding={1}>
        <form onSubmit={onSubmitForm}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={e => {
                  handleNameInput(e.target.value);
                }}
                error={isNameError ? true : false}
                helperText={isNameError && 'Enter name'}
              />
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="+99 (999) 999-99-99"
                value={number}
                onChange={e => {
                  handleNumberInput(e.target.value);
                }}
              >
                {inputProps => (
                  <TextField
                    {...inputProps}
                    fullWidth
                    type="tel"
                    id="number"
                    label="Number"
                    variant="outlined"
                    error={isNumberError ? true : false}
                    helperText={isNumberError && 'Enter number'}
                  />
                )}
              </InputMask>
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
};

export default ContactForm;
