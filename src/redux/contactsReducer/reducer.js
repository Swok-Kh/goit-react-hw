import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';
import { getContactsFromDB } from '../../services';

const initialState = {
  items: getContactsFromDB(),
  filter: ''
};

const contactsReducer = createReducer(initialState.items, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer(initialState.filter, {
  [changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
