import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from '../components/UI/Loader';
import paths from './paths';

const routes = [
  {
    path: paths.MAIN,
    component: lazy(() => import('../views/HomePage')),
    exact: true,
  },
  {
    path: paths.MOVIES,
    component: lazy(() => import('../views/MoviesPage')),
    exact: true,
  },
  {
    path: paths.MOVIES_ID(':movieId'),
    component: lazy(() => import('../views/MovieDetailsPage')),
  },
];
class Router extends Component {
  render() {
    return (
      <Suspense fallback={<Loader type="fixed" />}>
        <Switch>
          {routes.map(({ path, component: PageComponent, exact }) => (
            <Route
              key={path}
              exact={exact}
              path={path}
              component={PageComponent}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default Router;
