import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3223/';

const requestAllContacts = async () => {
  const { data } = await axios.get('contacts');

  return data;
};

const requestAddContact = async contact => {
  const { data } = await axios.post('contacts', contact);

  return data;
};

const requestDeleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);

  return data;
};

export {
  requestAllContacts,
  requestAddContact,
  requestDeleteContact,
};
