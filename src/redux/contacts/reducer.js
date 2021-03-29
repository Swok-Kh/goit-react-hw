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
} from './actions';

const initialState = {
  items: [],
  filter: '',
  error: '',
  loading: false,
};

const payloadToState = (_, { payload }) => payload;

const items = createReducer(initialState.items, {
  [fetchAllContactsSuccess]: payloadToState,
  [addContactSuccsess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactSuccsess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
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
});

export default combineReducers({
  items,
  filter,
  error,
  loading,
});
