// @flow
import { createSelector } from 'reselect';
import { get, chain } from 'lodash';
import type { ApplicationStateTypes } from '@/reducers/index';
import type { PriceListStateType, PriceListType, AdditionalServicesType } from './price-list-types';
import {
  PRICE_LIST_PAGE_STORE_KEY, PRICE_LIST_SYSTEM_TITLES,
} from './price-list-constants';

const getPriceListState = (state: ApplicationStateTypes) => state[PRICE_LIST_PAGE_STORE_KEY];

// TODO [Denis_Voronin] 16/12/2018 Check types in store

export const getPriceListFromStore = createSelector(
  getPriceListState,
  (state: PriceListStateType) => get(state, 'priceList')
);

export const getCornerProcessingPrice = createSelector(
  getPriceListFromStore,
  (priceList: PriceListType) => get(
    priceList, ['servicesPriceList', PRICE_LIST_SYSTEM_TITLES.CORNER_PROCESSING_SYSTEM_TITLE]
  ),
);

export const getInstallationPrice = createSelector(
  getPriceListFromStore,
  (priceList: PriceListType) => get(
    priceList, ['servicesPriceList', PRICE_LIST_SYSTEM_TITLES.INSTALATION_SYSTEM_TITLE]
  ),
);

export const getAdditionalServices = createSelector(
  getPriceListFromStore,
  (priceList: PriceListType) => get(priceList, ['servicesPriceList', 'additionalServices']),
);


export const getBaseDeliveryPrice = createSelector(
  getAdditionalServices,
  (additionalServices: AdditionalServicesType[]) => (
    chain(additionalServices)
      .find({ systemTitle: PRICE_LIST_SYSTEM_TITLES.ADDITIONAL_DELIVERY_SYSTEM_TITLE })
      .get('price')
      .value()
  )
);

export const getAdditionalDeliveryPrice = createSelector(
  getAdditionalServices,
  (additionalServices: AdditionalServicesType[]) => chain(additionalServices)
    .find({ systemTitle: PRICE_LIST_SYSTEM_TITLES.ADDITIONAL_DELIVERY_SYSTEM_TITLE })
    .get('additionalOneKilometerPrice')
    .value()
);

export const getBaseMeasurementPrice = createSelector(
  getAdditionalServices,
  (additionalServices: AdditionalServicesType[]) => (
    chain(additionalServices)
      .find({ systemTitle: PRICE_LIST_SYSTEM_TITLES.ADDITIONAL_MEASUREMENT_SYSTEM_TITLE })
      .get('price')
      .value()
  )
);

export const getAdditionalMeasurementPrice = createSelector(
  getAdditionalServices,
  (additionalServices: AdditionalServicesType[]) => chain(additionalServices)
    .find({ systemTitle: PRICE_LIST_SYSTEM_TITLES.ADDITIONAL_MEASUREMENT_SYSTEM_TITLE })
    .get('additionalOneKilometerPrice')
    .value()
);

export const getMainBowlsPriceList = createSelector(
  getPriceListFromStore,
  (priceList: PriceListType) => get(priceList, ['bowlsPriceList', 'mainBowls']),
);

export const getAdditionalBowlsPriceList = createSelector(
  getPriceListFromStore,
  (priceList: PriceListType) => get(priceList, ['bowlsPriceList', 'additionalBowls']),
);
