import throttle from 'lodash.throttle';

const CONTACTS_KEY = 'contacts';

const getContactsFromDB = () => {
  const contacts = localStorage.getItem(CONTACTS_KEY);

  return contacts ? JSON.parse(contacts) : [];
};

const setContactsToDB = contacts => {
  if (contacts) localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
};

const writeToDBFromStore = store =>
  throttle(() => {
    const { items } = store.getState().contacts;
    setContactsToDB(items);
  }, 300);

export { getContactsFromDB, writeToDBFromStore };
