import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import withUserLogin from './withUserLogin';
import paths from './paths';
import Loader from '../components/Loader/Loader';

const RouteWithGuard = ({
  isUserLogin,
  isLoginRequired,
  availableWhenLogin,
  token,
  ...restProps
}) => {
  if (isLoginRequired && isUserLogin && availableWhenLogin)
    return <Route {...restProps} />;
  if (!availableWhenLogin && isUserLogin)
    return <Redirect to={paths.CONTACTS} />;
  if (!isUserLogin && token) return <Loader type='circular' />
  if (!isUserLogin && !availableWhenLogin) return <Route {...restProps} />;

  return <Redirect to={paths.LOGIN} />;
};

RouteWithGuard.propTypes = {
  isUserLogin: PropTypes.bool,
  isLoginRequired: PropTypes.bool,
  availableWhenLogin: PropTypes.bool,
  token: PropTypes.string,
};

export default withUserLogin(RouteWithGuard);
