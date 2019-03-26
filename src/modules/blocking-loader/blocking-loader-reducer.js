// @flow
import { BLOCK, UNBLOCK } from './blocking-loader-actions';

export const blockingRequestsLoaderReducer = (state: { [key: string]: boolean } = {}, { type, payload }: Action) => {
  switch (type) {
    case BLOCK:
      return {
        ...state,
        [payload]: true,
      };
    case UNBLOCK:
      return {
        ...state,
        [payload]: false,
      };
    default:
      return state;
  }
};
