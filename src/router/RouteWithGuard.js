import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useUserLogin } from '../hooks/';
import paths from './paths';
import Loader from '../components/Loader/Loader';

const RouteWithGuard = ({
  isLoginRequired,
  availableWhenLogin,
  ...restProps
}) => {
  const { isLogin, token } = useUserLogin();
  if (isLogin && isLoginRequired && availableWhenLogin)
    return <Route {...restProps} />;
  if (isLogin && !availableWhenLogin) return <Redirect to={paths.CONTACTS} />;
  if (!isLogin && token) return <Loader type="circular" />;
  if (!isLogin && !availableWhenLogin) return <Route {...restProps} />;

  return <Redirect to={paths.LOGIN} />;
};

RouteWithGuard.propTypes = {
  isLoginRequired: PropTypes.bool,
  availableWhenLogin: PropTypes.bool,
};

export default RouteWithGuard;
