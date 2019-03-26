// @flow
import { createSelector } from 'reselect';
import { get } from 'lodash';
import type { ApplicationStateTypes } from '@/reducers';
import type { CommentsStateType } from './comments-slider-types';
import { COMMENTS_STORE_KEY } from './comments-slider-constants';

const getCommentsState = (state: ApplicationStateTypes) => state[COMMENTS_STORE_KEY];

// TODO [Denis_Voronin] 16/12/2018 Check types in store

export const getCommentsFromStore = createSelector(
  getCommentsState,
  (state: CommentsStateType) => get(state, 'comments')
);
