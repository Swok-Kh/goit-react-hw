import { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Loader from '../components/Loader';
import RouteWithGuard from './RouteWithGuard';
import routes from './routes';
import paths from "./paths";

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Box pt={8}>
        <Switch>
          {routes.map(
            (
              {
                path,
                exact,
                component: PageComponent,
                isLoginRequired,
                availableWhenLogin,
              },
              index,
            ) => (
              <RouteWithGuard
                key={index}
                path={path}
                exact={exact}
                component={PageComponent}
                isLoginRequired={isLoginRequired}
                availableWhenLogin={availableWhenLogin}
              />
            ),
          )}
          <Redirect to={paths.LOGIN} />
        </Switch>
      </Box>
    </Suspense>
  );
};

export default Router;
