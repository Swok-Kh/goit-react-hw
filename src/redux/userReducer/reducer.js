import { createReducer, combineReducers } from '@reduxjs/toolkit';
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
import { payloadToState } from '../services';
import { getTokenFromLocalStorage } from '../../services';

const initialState = {
  data: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
  error: null,
  loading: false,
};

const data = createReducer(initialState.data, {
  [fetchCurrentUserSuccess]: payloadToState,
  [fetchLoginUserSuccess]: (_, { payload: { user } }) => user,
  [fetchSingupUserSuccess]: (_, { payload: { user } }) => user,
  [fetchLogoutUserSuccess]: () => initialState.user,
});

const token = createReducer(getTokenFromLocalStorage() || initialState.token, {
  [fetchLoginUserSuccess]: (_, { payload: { token } }) => token,
  [fetchSingupUserSuccess]: (_, { payload: { token } }) => token,
  [fetchLogoutUserSuccess]: () => '',
  [fetchCurrentUserError]: () => ''
});

const isLogin = createReducer(initialState.isLogin, {
  [fetchSingupUserSuccess]: () => true,
  [fetchLoginUserSuccess]: () => true,
  [fetchCurrentUserSuccess]: () => true,

  [fetchLogoutUserSuccess]: () => false,

  [fetchCurrentUserError]: () => false,
  [fetchLoginUserError]: () => false,
  [fetchSingupUserError]: () => false,
})

const loading = createReducer(initialState.loading, {
  [fetchCurrentUserRequest]: () => true,
  [fetchLoginUserRequest]: () => true,
  [fetchSingupUserRequest]: () => true,
  [fetchLogoutUserRequest]: () => true,

  [fetchCurrentUserSuccess]: () => false,
  [fetchLoginUserSuccess]: () => false,
  [fetchSingupUserSuccess]: () => false,
  [fetchLogoutUserSuccess]: () => false,

  [fetchCurrentUserError]: () => false,
  [fetchLoginUserError]: () => false,
  [fetchSingupUserError]: () => false,
  [fetchLogoutUserError]: () => false,
});

const error = createReducer(initialState.error, {
  [fetchCurrentUserRequest]: () => null,
  [fetchLoginUserRequest]: () => null,
  [fetchSingupUserRequest]: () => null,
  [fetchLogoutUserRequest]: () => null,

  [fetchCurrentUserError]: payloadToState,
  [fetchLoginUserError]: payloadToState,
  [fetchSingupUserError]: payloadToState,
  [fetchLogoutUserError]: payloadToState,
});

export default combineReducers({
  data,
  token,
  error,
  loading,
  isLogin
});
