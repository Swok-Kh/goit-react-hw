import { useDispatch, useSelector } from 'react-redux';
import { Box, Paper, TextField } from '@material-ui/core';
import {
  changeFilter,
  getContactsLength,
  getFilterValue,
} from '../../redux/contactsReducer';

const ContactsFilter = () => {
  const value = useSelector(getFilterValue);
  const contactsLength = useSelector(getContactsLength);
  const dispach = useDispatch();
  return (
    contactsLength > 1 && (
      <Paper elevation={3}>
        <Box p={1} mb={1}>
          <TextField
            fullWidth
            id="filter"
            label="Search"
            variant="outlined"
            value={value}
            onChange={e => dispach(changeFilter(e.target.value))}
          />
        </Box>
      </Paper>
    )
  );
};

export default ContactsFilter;
