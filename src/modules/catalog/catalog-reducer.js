// @flow
import {
  SET_PRODUCT_CARDS,
  SET_FILTER_METHOD,
} from './catalog-actions';
import type { ProductCardsStateType } from './catalog-types';

const INITIAL_STATE: ProductCardsStateType = {
  productCards: [],
  filterMethod: '',
};

export const catalogReducer = (state: ProductCardsStateType = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case SET_PRODUCT_CARDS:
      return {
        ...state,
        productCards: payload,
      };
    case SET_FILTER_METHOD:
      return {
        ...state,
        filterMethod: payload,
      };
    default:
      return state;
  }
};
