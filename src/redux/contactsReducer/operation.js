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
  updateContactRequest,
  updateContactSuccsess,
  updateContactError,
} from './index';
import {
  requestAddContact,
  requestDeleteContact,
  requestAllContacts,
  requestUpdateContact,
} from '../../services';
import { operationWrapper } from '../services';

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

const updateContact = operationWrapper(
  updateContactRequest,
  updateContactSuccsess,
  updateContactError,
  requestUpdateContact,
  true
);

export { addContact, deleteContact, fetchAllContacts, updateContact };
