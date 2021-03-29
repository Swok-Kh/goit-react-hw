import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import { writeToDBFromStore } from '../services';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

store.subscribe(
  writeToDBFromStore(store)
);

export default store;
