import {
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  addContactRequest,
  addContactSuccsess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContactError,
} from './actions';
import {
  requestAddContact,
  requestDeleteContact,
  requestAllContacts,
} from '../../services';

const operationWrapper = (
  actionOnRequest,
  actionOnSuccess,
  actionOnError,
  requestFunc,
  valueAsPayload = false,
) => value => async dispatch => {
  dispatch(actionOnRequest());
  try {
    const response = await requestFunc(value);
    dispatch(actionOnSuccess(valueAsPayload ? value : response));
  } catch ({ message }) {
    dispatch(actionOnError(message));
  }
};

const fetchAllContacts = operationWrapper(
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  requestAllContacts,
);

const addContact = operationWrapper(
  addContactRequest,
  addContactSuccsess,
  addContactError,
  requestAddContact,
);

const deleteContact = operationWrapper(
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContactError,
  requestDeleteContact,
  true,
);

export { addContact, deleteContact, fetchAllContacts };
