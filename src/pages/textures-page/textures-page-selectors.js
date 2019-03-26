// @flow
import { createSelector } from 'reselect';
import { get } from 'lodash';
import type { ApplicationStateTypes } from '@/reducers';
import type { TexturesStateType } from './textures-page-types';
import { TEXTURES_PAGE_STORE_KEY } from './textures-page-constants';

const getTexturesState = (state: ApplicationStateTypes) => state[TEXTURES_PAGE_STORE_KEY];

// TODO [Denis_Voronin] 16/12/2018 Check types in store

export const getTexturesFromStore = createSelector(
  getTexturesState,
  (state: TexturesStateType) => get(state, 'textures')
);
