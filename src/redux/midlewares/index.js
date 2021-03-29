import {
  fetchLoginUserSuccess,
  fetchSingupUserSuccess,
  fetchCurrentUserRequest,
  fetchCurrentUserError,
  fetchLogoutUserSuccess,
} from '../userReducer/actions';
import { setTokenToLocalStorage } from '../../services';
import {
  axiosAuthorizationHeader,
  getTokenFromLocalStorage,
} from '../../services';

const tokenHandlerMidleware = store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case fetchCurrentUserRequest.toString(): {
      axiosAuthorizationHeader.set(getTokenFromLocalStorage());

      return next(action);
    }
    case fetchLoginUserSuccess.toString(): {
      axiosAuthorizationHeader.set(payload.token);
      setTokenToLocalStorage(payload.token);

      return next(action);
    }
    case fetchSingupUserSuccess.toString(): {
      axiosAuthorizationHeader.set(payload.token);
      setTokenToLocalStorage(payload.token);

      return next(action);
    }
    case fetchCurrentUserError.toString(): {
      axiosAuthorizationHeader.unset();
      setTokenToLocalStorage();

      return next(action);
    }
    case fetchLogoutUserSuccess.toString(): {
      axiosAuthorizationHeader.unset();
      setTokenToLocalStorage();

      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export { tokenHandlerMidleware };
