import { createAction } from '@reduxjs/toolkit';

const fetchAllContactsRequest = createAction(
  'contacts/FETCH_ALL_CONTACTS_REQUEST',
);
const fetchAllContactsSuccess = createAction(
  'contacts/FETCH_ALL_CONTACTS_SUCCESS',
);
const fetchAllContactsError = createAction('contacts/FETCH_ALL_CONTACTS_ERROR');

const addContactRequest = createAction('contacts/ADD_CONTACT_REQUEST');
const addContactSuccsess = createAction('contacts/ADD_CONTACT_SUCCESS');
const addContactError = createAction('contacts/ADD_CONTACT_ERROR');

const deleteContactRequest = createAction('contacts/DELETE_CONTACT_REQUEST');
const deleteContactSuccsess = createAction('contacts/DELETE_CONTACT_SUCCESS');
const deleteContactError = createAction('contacts/DELETE_CONTACT_ERROR');

const changeFilter = createAction('contacts/FILTER_CHANGE');

export {
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  addContactRequest,
  addContactSuccsess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContactError,
  changeFilter,
};
