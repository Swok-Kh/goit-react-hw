import { createReducer, combineReducers } from '@reduxjs/toolkit';
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
  changeFilter,
  updateContactRequest,
  updateContactSuccsess,
  updateContactError,
} from './actions';
import { fetchLogoutUserSuccess } from '../userReducer';
import { payloadToState } from '../services';

const initialState = {
  items: [],
  filter: '',
  error: '',
  loading: false,
};

const items = createReducer(initialState.items, {
  [fetchAllContactsSuccess]: payloadToState,
  [addContactSuccsess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactSuccsess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
  [updateContactSuccsess]: (state, { payload }) => {
    const index = state.find(({ id }) => id === payload.id);
    const contacts = [...state];
    contacts[index] = {
      id: payload.id,
      name: payload.name,
      number: payload.number,
    };

    return contacts;
  },
  [fetchLogoutUserSuccess]: () => [],
});

const filter = createReducer(initialState.filter, {
  [changeFilter]: payloadToState,
});

const error = createReducer(initialState.error, {
  [fetchAllContactsRequest]: () => '',
  [addContactRequest]: () => '',
  [deleteContactRequest]: () => '',
  [fetchAllContactsError]: payloadToState,
  [addContactError]: payloadToState,
  [deleteContactError]: payloadToState,
  [updateContactError]: payloadToState,
});

const loading = createReducer(initialState.loading, {
  [fetchAllContactsRequest]: () => true,
  [fetchAllContactsSuccess]: () => false,
  [fetchAllContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccsess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccsess]: () => false,
  [deleteContactError]: () => false,

  [updateContactRequest]: () => true,
  [updateContactSuccsess]: () => false,
  [updateContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  error,
  loading,
});
