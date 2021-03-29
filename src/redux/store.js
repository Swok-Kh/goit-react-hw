import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import userReducer from './userReducer';

const store = configureStore({
  reducer: { user: userReducer, contacts: contactsReducer },
});

export default store;
