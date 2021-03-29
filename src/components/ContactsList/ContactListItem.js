import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Tooltip,
  IconButton,
  Grow,
  Paper,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { Delete, ErrorOutline, Contacts, Edit } from '@material-ui/icons';
import { deleteContact, getIsLoading } from '../../redux/contactsReducer';
import paths from '../../router/paths';

const ContactListItem = ({ user }) => {
  const isLoading = useSelector(getIsLoading);
  const dispach = useDispatch();
  if (!user) {
    return (
      <Grow in={true} direction="up" mountOnEnter unmountOnExit>
        <ListItem>
          {isLoading ? (
            <Box ml="auto" mr="auto">
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
      </Grow>
    );
  }
  const { id, name, number } = user;
  return (
    <>
      <Grow in={true} direction="up" mountOnEnter unmountOnExit>
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
                  <Link to={paths.UPDATE_CONTACT(id)}>
                    <IconButton color="secondary">
                      <Edit />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip
                  title="Delete contact"
                  aria-label="Delete contact"
                  arrow
                >
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      dispach(deleteContact({ id }));
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          </Box>
        </Paper>
      </Grow>
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
};

export default ContactListItem;
