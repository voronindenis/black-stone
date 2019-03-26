// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { map } from 'lodash';
import { Header } from '@/modules/header';
import { Footer } from '@/modules/footer';
import { BlockingLoader } from '@/modules/blocking-loader';
import { routes } from '@/routes';

export const MainPage = () => (
  <React.Fragment>
    <Header />
    <Switch>
      {
        map(routes, route => (
          <Route key={Math.random()} path={route.path} component={route.component} exact={route.exact !== false} />
        ))
      }
    </Switch>
    <Footer />
    <BlockingLoader />
  </React.Fragment>
);
