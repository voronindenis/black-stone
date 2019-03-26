// @flow
import { createSelector } from 'reselect';
import { get } from 'lodash';
import type { ApplicationStateTypes } from '@/reducers';
import type { ProductCardsStateType } from './catalog-types';
import { CATALOG_STORE_KEY } from './catalog-constants';

const getCatalogState = (state: ApplicationStateTypes) => state[CATALOG_STORE_KEY];

// TODO [Denis_Voronin] 16/12/2018 Check types in store

export const getProductCardsFromStore = createSelector(
  getCatalogState,
  (state: ProductCardsStateType) => get(state, 'productCards')
);

export const getFilterMethod = createSelector(
  getCatalogState,
  (state: ProductCardsStateType) => get(state, 'filterMethod')
);
