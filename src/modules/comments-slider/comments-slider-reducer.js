// @flow
import {
  SET_COMMENTS,
} from './comments-slider-actions';
import type { CommentsStateType } from './comments-slider-types';

const INITIAL_STATE: CommentsStateType = {
  comments: [],
};

export const commentsReducer = (state: CommentsStateType = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    default:
      return state;
  }
};
