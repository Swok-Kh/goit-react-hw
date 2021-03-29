import {
  fetchSingupUserRequest,
  fetchSingupUserSuccess,
  fetchSingupUserError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  fetchLoginUserRequest,
  fetchLoginUserSuccess,
  fetchLoginUserError,
  fetchLogoutUserRequest,
  fetchLogoutUserSuccess,
  fetchLogoutUserError,
} from './actions';
import { operationWrapper } from '../services';
import {
  fetchRegisterUser,
  fetchLoginUser,
  fetchLogoutUser,
  fetchCurrentUser,
} from '../../services';

const registerUser = operationWrapper(
  fetchSingupUserRequest,
  fetchSingupUserSuccess,
  fetchSingupUserError,
  fetchRegisterUser,
);
const loginUser = operationWrapper(
  fetchLoginUserRequest,
  fetchLoginUserSuccess,
  fetchLoginUserError,
  fetchLoginUser,
);
const logoutUser = operationWrapper(
  fetchLogoutUserRequest,
  fetchLogoutUserSuccess,
  fetchLogoutUserError,
  fetchLogoutUser,
);
const currentUser = operationWrapper(
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  fetchCurrentUser,
);

export { registerUser, loginUser, logoutUser, currentUser };
