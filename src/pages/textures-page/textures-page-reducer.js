// @flow
import {
  SET_TEXTURES,
} from './textures-page-actions';
import type { TexturesStateType } from './textures-page-types';

const INITIAL_STATE: TexturesStateType = {
  textures: [],
};

export const texturesReducer = (state: TexturesStateType = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case SET_TEXTURES:
      return {
        ...state,
        textures: payload,
      };
    default:
      return state;
  }
};
