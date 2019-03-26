// @flow
import pathToRegexp from 'path-to-regexp';
import { history } from '@/history';
import {
  COUNTERTOP_ROUTE,
  WINDOW_SILLS_ROUTE,
  SINKS_ROUTE,
  BAR_COUNTERS_ROUTE,
  TABLES_ROUTE,
} from '@/constants';

const toHomePage = () => history.push('/');

const toCountertopProductCardPage = (id: string) => {
  const toPath = pathToRegexp.compile(`/${COUNTERTOP_ROUTE}/:id`);
  return toPath({
    id,
  });
};

const toWindowSillsProductCardPage = (id: string) => {
  const toPath = pathToRegexp.compile(`/${WINDOW_SILLS_ROUTE}/:id`);
  return toPath({
    id,
  });
};

const toSinksProductCardPage = (id: string) => {
  const toPath = pathToRegexp.compile(`/${SINKS_ROUTE}/:id`);
  return toPath({
    id,
  });
};

const toBarCountersProductCardPage = (id: string) => {
  const toPath = pathToRegexp.compile(`/${BAR_COUNTERS_ROUTE}/:id`);
  return toPath({
    id,
  });
};

const toTablesProductCardPage = (id: string) => {
  const toPath = pathToRegexp.compile(`/${TABLES_ROUTE}/:id`);
  return toPath({
    id,
  });
};

export const createLink = (category: string, id: string) => {
  switch (category) {
    case COUNTERTOP_ROUTE:
      return toCountertopProductCardPage(id);
    case WINDOW_SILLS_ROUTE:
      return toWindowSillsProductCardPage(id);
    case SINKS_ROUTE:
      return toSinksProductCardPage(id);
    case BAR_COUNTERS_ROUTE:
      return toBarCountersProductCardPage(id);
    case TABLES_ROUTE:
      return toTablesProductCardPage(id);
    default:
      toHomePage();
  }
};
