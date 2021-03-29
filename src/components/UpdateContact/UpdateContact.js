import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import {
  getAllContacts,
  updateContact,
  fetchAllContacts,
} from '../../redux/contactsReducer';
import paths from '../../router/paths';

class UpdateContact extends Component {
  state = { id: '', name: '', number: '' };
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.fetchAllContacts();
      return;
    }
  }
  componentDidUpdate(_, prevState) {
    const { contact_id } = this.props.match.params;
    const { items } = this.props
    if (contact_id !== prevState.id && items.length > 0) {
      const { id, name, number } = items.find(
        ({ id }) => id === contact_id,
      );

      this.setState(() => ({ id, name, number }));
    }
  }
  handleChange = e => {
    this.setState(() => ({ [e.target.id]: e.target.value }));
  };
  handleOnSubmit = async e => {
    e.preventDefault();
    const { history, updateContact } = this.props;
    try {
      await updateContact(this.state);
      history.push(paths.CONTACTS);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, number } = this.state;
    const { history } = this.props;
    return (
      <Paper>
        <Box p={1}>
          <form onSubmit={this.handleOnSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  variant="outlined"
                  label="Name"
                  value={name}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="number"
                  variant="outlined"
                  label="Number"
                  value={number}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    history.push(paths.CONTACTS);
                  }}
                >
                  Cancel
                </Button>
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
  }
}

UpdateContact.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

const mapStateToProps = state => ({ items: getAllContacts(state) });

const mapDispachToProps = { updateContact, fetchAllContacts };

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(withRouter(UpdateContact));
