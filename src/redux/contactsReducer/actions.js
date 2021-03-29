import { createAction } from '@reduxjs/toolkit';

// All contacts
const fetchAllContactsRequest = createAction(
  'contacts/FETCH_ALL_CONTACTS_REQUEST',
);
const fetchAllContactsSuccess = createAction(
  'contacts/FETCH_ALL_CONTACTS_SUCCESS',
);
const fetchAllContactsError = createAction('contacts/FETCH_ALL_CONTACTS_ERROR');

// Add contact
const addContactRequest = createAction('contacts/ADD_CONTACT_REQUEST');
const addContactSuccsess = createAction('contacts/ADD_CONTACT_SUCCESS');
const addContactError = createAction('contacts/ADD_CONTACT_ERROR');

// Delete contact
const deleteContactRequest = createAction('contacts/DELETE_CONTACT_REQUEST');
const deleteContactSuccsess = createAction('contacts/DELETE_CONTACT_SUCCESS');
const deleteContactError = createAction('contacts/DELETE_CONTACT_ERROR');

// Update contact
const updateContactRequest = createAction('contacts/UPDATE_CONTACT_REQUEST');
const updateContactSuccsess = createAction('contacts/UPDATE_CONTACT_SUCCESS');
const updateContactError = createAction('contacts/UPDATE_CONTACT_ERROR');

// Change filter
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
  updateContactRequest,
  updateContactSuccsess,
  updateContactError,
  changeFilter,
};
