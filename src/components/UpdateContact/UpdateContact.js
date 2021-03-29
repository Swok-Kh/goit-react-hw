import { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core';
import {
  getAllContacts,
  updateContact,
  fetchAllContacts,
  getIsLoading,
} from '../../redux/contactsReducer';
import InputMask from 'react-input-mask';
import paths from '../../router/paths';

const useStyles = makeStyles({ link: { textDecoration: 'none' } });

const UpdateContact = () => {
  const [contact, setContact] = useState({ id: '', name: '', number: '' });
  const loading = useSelector(getIsLoading);
  const items = useSelector(getAllContacts);
  const { contact_id } = useParams();
  const history = useHistory();
  const dispach = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    if (items.length === 0) dispach(fetchAllContacts());
  }, [dispach, items]);

  useEffect(() => {
    if (loading) return;
    if (items.length > 0) {
      const foundContact = items.find(({ id }) => id === contact_id);
      if (!foundContact) {
        history.push(paths.CONTACTS);
      }
      setContact(foundContact);
    }
  }, [contact_id, history, items, loading]);

  const handleChange = e => {
    setContact(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    await dispach(updateContact(contact));
    history.push(paths.CONTACTS);
  };

  return (
    <Paper>
      <Box p={1}>
        <form onSubmit={handleOnSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                variant="outlined"
                label="Name"
                value={contact.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="+99 (999) 999-99-99"
                value={contact.number}
                onChange={handleChange}
              >
                {inputProps => (
                  <TextField
                    {...inputProps}
                    fullWidth
                    id="number"
                    variant="outlined"
                    label="Number"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={6}>
              <Link to={paths.CONTACTS} className={styles.link}>
                <Button fullWidth variant="outlined" color="primary">
                  Cancel
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Ok
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default UpdateContact;
