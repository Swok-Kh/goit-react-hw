import { createAction } from '@reduxjs/toolkit';

// New user
export const fetchSingupUserRequest = createAction(
  'user/FETCH_SINGUP_USER_REQUEST',
);
export const fetchSingupUserSuccess = createAction(
  'user/FETCH_SINGUP_USER_SUCCESS',
);
export const fetchSingupUserError = createAction(
  'user/FETCH_SINGUP_USER_ERROR',
);

// Current user
export const fetchCurrentUserRequest = createAction(
  'user/FETCH_CURRENT_USER_REQUEST',
);
export const fetchCurrentUserSuccess = createAction(
  'user/FETCH_CURRENT_USER_SUCCESS',
);
export const fetchCurrentUserError = createAction(
  'user/FETCH_CURRENT_USER_ERROR',
);

// Login
export const fetchLoginUserRequest = createAction(
  'user/FETCH_LOGIN_USER_REQUEST',
);
export const fetchLoginUserSuccess = createAction(
  'user/FETCH_LOGIN_USER_SUCCESS',
);
export const fetchLoginUserError = createAction('user/FETCH_LOGIN_USER_ERROR');

// Logout
export const fetchLogoutUserRequest = createAction(
  'user/FETCH_LOGOUT_USER_REQUEST',
);
export const fetchLogoutUserSuccess = createAction(
  'user/FETCH_LOGOUT_USER_SUCCESS',
);
export const fetchLogoutUserError = createAction(
  'user/FETCH_LOGOUT_USER_ERROR',
);
