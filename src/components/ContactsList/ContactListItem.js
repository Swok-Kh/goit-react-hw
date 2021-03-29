import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Tooltip,
  IconButton,
  Slide,
  Paper,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { Delete, ErrorOutline, Contacts, Edit } from '@material-ui/icons';
import { deleteContact, getIsLoading } from '../../redux/contactsReducer';
import paths from '../../router/paths';

const ContactListItem = ({ user, deleteContact, history, isLoading }) => {
  if (!user) {
    return (
      <Slide in={true} direction="up" mountOnEnter unmountOnExit>
        <ListItem >
          {isLoading ? (
            <Box ml='auto' mr='auto'>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <ListItemIcon>
                <ErrorOutline fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    There are no contacts in the phonebook
                      </Typography>
                }
              />
            </>
          )}
        </ListItem>
      </Slide>
    );
  }
  const { id, name, number } = user;
  return (
    <>
      <Slide in={true} direction="up" mountOnEnter unmountOnExit>
        <Paper component="li">
          <Box mb={1}>
            <ListItem ContainerComponent="div">
              <ListItemIcon>
                <Contacts fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography>{name}</Typography>}
                secondary={
                  <Typography color="textSecondary">{number}</Typography>
                }
              />
              <ListItemSecondaryAction>
                <Tooltip
                  title="Update contact"
                  aria-label="Update contact"
                  arrow
                >
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      history.push(paths.UPDATE_CONTACT(id));
                    }}
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Delete contact"
                  aria-label="Delete contact"
                  arrow
                >
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      deleteContact({ id });
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          </Box>
        </Paper>
      </Slide>
    </>
  );
};

ContactListItem.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    PropTypes.oneOf([undefined, null]),
  ]),
  deleteContact: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {
  deleteContact,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ContactListItem));
