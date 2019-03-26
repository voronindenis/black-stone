// @flow
import {
  SET_PRICE_LIST,
} from './price-list-actions';
import type { PriceListStateType } from './price-list-types';

const INITIAL_STATE: PriceListStateType = {
  priceList: {},
};

export const priceListReducer = (state: PriceListStateType = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case SET_PRICE_LIST:
      return {
        ...state,
        priceList: payload,
      };
    default:
      return state;
  }
};
