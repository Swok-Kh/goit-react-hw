import { lazy } from 'react';
import paths from './paths';

const routes = [
  {
    path: paths.CONTACTS,
    exact: true,
    isLoginRequired: true,
    availableWhenLogin: true,
    component: lazy(() => import('../views/ContactsView')),
  },
  {
    path: paths.LOGIN,
    exact: true,
    availableWhenLogin: false,
    component: lazy(() => import('../views/LoginView')),
  },
  {
    path: paths.REGISTER,
    exact: true,
    availableWhenLogin: false,
    component: lazy(() => import('../views/RegisterView')),
  },
  {
    path: paths.UPDATE_CONTACT(':contact_id'),
    isLoginRequired: true,
    availableWhenLogin: true,
    component: lazy(() => import('../views/UpdateContactView')),
  },
];

export default routes;
