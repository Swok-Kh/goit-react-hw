import {
  getIsLoading as contactsIsLoading,
  getError as getContactsError,
} from './contactsReducer';
import {
  getIsLoading as userIsLoading,
  getError as getUserError,
} from './userReducer';

const getIsLoading = store => contactsIsLoading(store) || userIsLoading(store);

const getError = store => getContactsError(store) || getUserError(store);

export { getIsLoading, getError };
