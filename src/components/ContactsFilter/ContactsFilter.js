import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Paper, TextField } from '@material-ui/core';
import {
  changeFilter,
  getContactsLength,
  getFilterValue,
} from '../../redux/contactsReducer';

const ContactsFilter = ({ value, contactsLength, changeFilter }) => {
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
            onChange={e => changeFilter(e.target.value)}
          />
        </Box>
      </Paper>
    )
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  contactsLength: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilterValue(state),
  contactsLength: getContactsLength(state),
});
const mapDispatchToProps = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
