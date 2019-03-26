// @flow
import { createSelector } from 'reselect';
import { some } from 'lodash';
import type { ApplicationStateTypes } from '@/reducers';
import { BLOCKING_REQUESTS_LOADER_STORE_KEY } from './blocking-loader-constants';

const blockingRequestsLoaderState = (state: ApplicationStateTypes) => state[BLOCKING_REQUESTS_LOADER_STORE_KEY];

export const getActive = createSelector(
  blockingRequestsLoaderState,
  (activeSelectors: { [key: string]: boolean }) => some(activeSelectors, (e: boolean) => e),
);
