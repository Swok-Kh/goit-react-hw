import { createSelector } from 'reselect';

export const getAllContacts = state => state.contacts.items;

export const getFilterValue = state => state.contacts.filter;

export const getfilteredContacts = createSelector(
  [getAllContacts, getFilterValue],
  (contacts, fiterValue) =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(fiterValue.toLocaleLowerCase()),
    ),
);

export const getContactsLength = state => getAllContacts(state).length;

export const getIsLoading = state => state.contacts.loading;

export const getIsError = state => state.contacts.error;
