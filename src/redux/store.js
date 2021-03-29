import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import userReducer from './userReducer';
import { tokenHandlerMidleware } from './midlewares';

const store = configureStore({
  reducer: { user: userReducer, contacts: contactsReducer },
  middleware: [...getDefaultMiddleware(), tokenHandlerMidleware],
});

export default store;
