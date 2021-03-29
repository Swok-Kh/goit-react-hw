import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

const addContact = createAction(
  'contacts/items/ADD_CONTACT',
  ({ name, number }) => ({
    payload: {
      id: uuid4(),
      name,
      number,
    }
  }),
);
const deleteContact = createAction('contacts/items/DELETE_CONTACT');
const changeFilter = createAction('contacts/filter/CHANGE_FILTER');

export { changeFilter, addContact, deleteContact };
