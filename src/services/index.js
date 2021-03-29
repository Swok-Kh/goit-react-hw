import axios from 'axios';

// Set defaults in Axios
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';
const axiosAuthorizationHeader = {
  set: token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

// Work with local storage
const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token ?? '';
};

const setTokenToLocalStorage = token => {
  localStorage.setItem('token', token ? token : '');
};


const fetchRegisterUser = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post('/users/signup', {
      name,
      email,
      password,
    });
    setTokenToLocalStorage(data.token);
    axiosAuthorizationHeader.set(data.token);

    return data;
  } catch (error) {
    if (error.response.status === 400)
      throw new Error('User creation error.Try again.');
  }
};

const fetchLoginUser = async ({ email, password }) => {
  try {
    const { data } = await axios.post('/users/login', { email, password });
    setTokenToLocalStorage(data.token);
    axiosAuthorizationHeader.set(data.token);

    return data;
  } catch (error) {
    if (error.response.status === 400)
      throw new Error('Invalid password or username. Try again.');
  }
};

const fetchCurrentUser = async () => {
  try {
    axiosAuthorizationHeader.set(getTokenFromLocalStorage());
    const { data } = await axios.get('users/current');

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      setTokenToLocalStorage();
      throw new Error('Invalid token. Please login again.');
    }
  }
};

const fetchLogoutUser = async () => {
  const { data } = await axios.post('/users/logout');
  axiosAuthorizationHeader.unset();
  setTokenToLocalStorage();

  return data;
};

const requestAllContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      setTokenToLocalStorage();
      throw new Error('Invalid token. Please login again.');
    }
    if (error.response.status === 404) throw new Error('No contacts.');
  }
};
const requestAddContact = async ({ name, number }) => {
  try {
    const { data } = await axios.post('/contacts', { name, number });

    return data;
  } catch (error) {
    if (error.response.status === 400)
      throw new Error('Failed to create contact.');
    if (error.response.status === 401) {
      setTokenToLocalStorage();
      throw new Error('Invalid token. Please login again.');
    }
  }
};
const requestDeleteContact = async ({ id }) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);

    return data;
  } catch (error) {
    if (error.response.status === 404)
      throw new Error('Failed to delete contact.');
    if (error.response.status === 401) {
      setTokenToLocalStorage();
      throw new Error('Invalid token. Please login again.');
    }
  }
};

const requestUpdateContact = async ({ id, name, number }) => {
  try {
    const { data } = await axios.patch(`/contacts/${id}`, { name, number });

    return data;
  } catch (error) {
    if (error.response.status === 404)
      throw new Error('Failed to update contact.');
    if (error.response.status === 401) {
      setTokenToLocalStorage();
      throw new Error('Invalid token. Please login again.');
    }
  }
};

export {
  fetchRegisterUser,
  fetchLoginUser,
  fetchCurrentUser,
  fetchLogoutUser,
  requestAllContacts,
  requestAddContact,
  requestDeleteContact,
  requestUpdateContact,
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
};
