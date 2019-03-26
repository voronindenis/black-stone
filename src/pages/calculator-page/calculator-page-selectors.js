// @flow
import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';
import {
  get, toNumber, find, isEmpty, assign, keys, includes, chain, forEach,
} from 'lodash';
import type { ApplicationStateTypes } from '@/reducers';
import {
  getBaseDeliveryPrice,
  getAdditionalDeliveryPrice,
  getBaseMeasurementPrice,
  getAdditionalMeasurementPrice,
  getCornerProcessingPrice,
  getMainBowlsPriceList,
  getAdditionalBowlsPriceList,
  getInstallationPrice,
  getAdditionalServices,
} from '@/modules/price-list';
import type { AdditionalServicesType, BasePriceListType } from '@/modules/price-list';
import { CALCULATOR_FORM_NAME, COUNTERTOP_TYPES_ENUM } from './calculator-page-constants';
import type {
  CalculatorFormValuesType,
  CountertopSizeType,
  CountertopElementsSizesType,
} from './calculator-page-types';

const getCalkulatorFormValues = (state: ApplicationStateTypes) => getFormValues(CALCULATOR_FORM_NAME)(state);

export const getManufacturer = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => get(calculatorFormValues, 'manufacturer'),
);

export const getSeries = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => get(calculatorFormValues, 'series'),
);

export const getCountertopType = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => get(calculatorFormValues, 'countertopType'),
);

export const checkIsNeedWallBoard = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => get(calculatorFormValues, 'isNeedWallBoard'),
);

export const checkIsNeedEndEdge = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => get(calculatorFormValues, 'isNeedEndEdge'),
);

export const checkIsNeedStoneWashing = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => get(calculatorFormValues, 'isNeedStoneWashing'),
);

export const checkIsNeedAdditionalStoneWashing = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => get(calculatorFormValues, 'isNeedAdditionalStoneWashing'),
);

export const getCountertopSize = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => {
    const aLength = get(calculatorFormValues, 'aLength');
    const bLength = get(calculatorFormValues, 'bLength');
    const cLength = get(calculatorFormValues, 'cLength');
    const width = get(calculatorFormValues, 'width');
    if (!aLength && !bLength && !cLength && !width) {
      return {};
    }
    return ({
      aLength,
      bLength,
      cLength,
      width,
    });
  }
);

export const getDeliveryPrice = createSelector(
  getCalkulatorFormValues,
  getBaseDeliveryPrice,
  getAdditionalDeliveryPrice,
  (calculatorFormValues: CalculatorFormValuesType, baseDeliveryPrice: string, additionalDeliveryPrice: string) => {
    const isNeedDelivery = get(calculatorFormValues, 'isNeedDelivery');
    const additionalDistance = get(isNeedDelivery, 'additionalDistance');
    if (additionalDistance) {
      return toNumber(baseDeliveryPrice) + toNumber(additionalDistance) * toNumber(additionalDeliveryPrice);
    }
    if (isNeedDelivery) {
      return toNumber(baseDeliveryPrice);
    }
    return 0;
  },
);

export const getMeasurementPrice = createSelector(
  getCalkulatorFormValues,
  getBaseMeasurementPrice,
  getAdditionalMeasurementPrice,
  (
    calculatorFormValues: CalculatorFormValuesType,
    baseMeasurementPrice: string,
    additionalMeasurementPrice: string,
  ) => {
    const isNeedMeasurement = get(calculatorFormValues, 'isNeedMeasurement');
    const additionalDistance = get(isNeedMeasurement, 'additionalDistance');
    if (additionalDistance) {
      return toNumber(baseMeasurementPrice) + toNumber(additionalDistance) * toNumber(additionalMeasurementPrice);
    }
    if (isNeedMeasurement) {
      return toNumber(baseMeasurementPrice);
    }
    return 0;
  },
);

export const getSizes = createSelector(
  getCountertopSize,
  (countertopSize: CountertopSizeType) => {
    const {
      aLength, bLength, cLength, width,
    } = countertopSize;
    const w = toNumber(width);
    const a = toNumber(aLength);
    const b = toNumber(bLength);
    const c = toNumber(cLength);
    if (aLength && bLength && cLength && width) {
      return ({
        area: ((a - w * 2) * w + b * w + c * w) / 10000,
        edgeLength: (a + b + c) / 100,
        wallLength: (a + b + c) / 100,
      });
    }
    if (aLength && bLength && width) {
      return ({
        area: ((a - w) * w + b * w) / 10000,
        edgeLength: (a + b) / 100,
        wallLength: (a + b) / 100,
      });
    }
    if (aLength && width) {
      return ({
        area: (a * w) / 10000,
        edgeLength: (a + w * 2) / 100,
        wallLength: a / 100,
      });
    }
    return {};
  }
);

export const getWallBoardTypePrice = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => toNumber(get(calculatorFormValues, 'wallBoard', 0))
);

export const getEndEdgeTypePrice = createSelector(
  getCalkulatorFormValues,
  (calculatorFormValues: CalculatorFormValuesType) => toNumber(get(calculatorFormValues, 'edgeProcess', 0))
);

export const getWallBoardPrice = createSelector(
  getWallBoardTypePrice,
  getSizes,
  (wallBoardTypePrice: number, sizes: CountertopElementsSizesType) => {
    if (!isEmpty(sizes)) {
      return get(sizes, 'wallLength') * wallBoardTypePrice;
    }
    return 0;
  }
);

export const getEndEdgePrice = createSelector(
  getEndEdgeTypePrice,
  getSizes,
  (endEdgeTypePrice: number, sizes: CountertopElementsSizesType) => {
    if (!isEmpty(sizes)) {
      return get(sizes, 'edgeLength') * endEdgeTypePrice;
    }
    return 0;
  }
);

export const getMainBowlPrice = createSelector(
  getCalkulatorFormValues,
  getMainBowlsPriceList,
  (calculatorFormValues: CalculatorFormValuesType, mainBowlsPriceList: BasePriceListType[]) => {
    const mainBowlId = get(calculatorFormValues, 'mainBowl');
    return get(find(mainBowlsPriceList, { id: mainBowlId }), 'price');
  },
);

export const getAdditionalBowlPrice = createSelector(
  getCalkulatorFormValues,
  getAdditionalBowlsPriceList,
  (calculatorFormValues: CalculatorFormValuesType, additionalBowlsPriceList: BasePriceListType[]) => {
    const additionalBowlId = get(calculatorFormValues, 'additionalBowl');
    return get(find(additionalBowlsPriceList, { id: additionalBowlId }), 'price');
  },
);

export const getCornerProcessingPriceValue = createSelector(
  getCalkulatorFormValues,
  getCornerProcessingPrice,
  getCountertopType,
  (
    calculatorFormValues: CalculatorFormValuesType,
    cornerProcessingPrice: string,
    countertopType: string,
  ) => {
    const isNeedCornerProcessing = get(calculatorFormValues, 'isNeedCornerProcessing');
    if (isNeedCornerProcessing) {
      switch (countertopType) {
        case COUNTERTOP_TYPES_ENUM.LINE_TYPE:
          return toNumber(cornerProcessingPrice) * 2;
        case COUNTERTOP_TYPES_ENUM.G_TYPE:
          return toNumber(cornerProcessingPrice) * 3;
        case COUNTERTOP_TYPES_ENUM.P_TYPE:
          return toNumber(cornerProcessingPrice) * 4;
        default:
          return 0;
      }
    }
    return 0;
  }
);

export const getTotalSum = createSelector(
  getCalkulatorFormValues,
  getSeries,
  getSizes,
  getMainBowlPrice,
  getAdditionalBowlPrice,
  getInstallationPrice,
  getAdditionalServices,
  getDeliveryPrice,
  getMeasurementPrice,
  getCornerProcessingPriceValue,
  getWallBoardPrice,
  getEndEdgePrice,
  (
    calculatorFormValues: CalculatorFormValuesType,
    series: string,
    sizes: CountertopElementsSizesType,
    mainBowlPrice: string,
    additionalBowlPrice: string,
    installationPrice: string,
    additionalServices: AdditionalServicesType[],
    deliveryPrice: number,
    measurementPrice: number,
    cornerProcessingPriceValue: number,
    wallBoardPrice: number,
    endEdgePrice: number,
  ) => {
    let sum = 0;
    const objectWithValuesForFinalCalculations = {
      installationPrice,
    };
    const isNeedCornerProcessing = get(calculatorFormValues, 'isNeedCornerProcessing');
    const isNeedCutoutUnderTheSink = get(calculatorFormValues, 'isNeedCutoutUnderTheSink');
    const isNeedCutoutUnderTheHob = get(calculatorFormValues, 'isNeedCutoutUnderTheHob');
    const isNeedGluingTheSinkUnderTheTabletop = get(calculatorFormValues, 'isNeedGluingTheSinkUnderTheTabletop');
    const isNeedGroovesForWaterDrainSet = get(calculatorFormValues, 'isNeedGroovesForWaterDrainSet');
    const isNeedHotRods = get(calculatorFormValues, 'isNeedHotRods');
    const selectedAdditionalServices = {};
    if (wallBoardPrice !== 0) {
      assign(objectWithValuesForFinalCalculations, { wallBoardPrice });
    }
    if (endEdgePrice !== 0) {
      assign(objectWithValuesForFinalCalculations, { endEdgePrice });
    }
    if (!isEmpty(sizes)) {
      const stonePrice = get(sizes, 'area') * toNumber(series);
      assign(objectWithValuesForFinalCalculations, { stonePrice });
    }
    if (mainBowlPrice) {
      assign(objectWithValuesForFinalCalculations, { mainBowlPrice });
    }
    if (additionalBowlPrice) {
      assign(objectWithValuesForFinalCalculations, { additionalBowlPrice });
    }
    if (isNeedCornerProcessing) {
      assign(objectWithValuesForFinalCalculations, { cornerProcessingTotalPrice: cornerProcessingPriceValue });
    }
    if (isNeedCutoutUnderTheSink) {
      assign(selectedAdditionalServices, { isNeedCutoutUnderTheSink });
    }
    if (isNeedCutoutUnderTheHob) {
      assign(selectedAdditionalServices, { isNeedCutoutUnderTheHob });
    }
    if (isNeedGluingTheSinkUnderTheTabletop) {
      assign(selectedAdditionalServices, { isNeedGluingTheSinkUnderTheTabletop });
    }
    if (isNeedGroovesForWaterDrainSet) {
      assign(selectedAdditionalServices, { isNeedGroovesForWaterDrainSet });
    }
    if (isNeedHotRods) {
      assign(selectedAdditionalServices, { isNeedHotRods });
    }
    if (!isEmpty(selectedAdditionalServices)) {
      const keysOfSelectedAdditionalServices = keys(selectedAdditionalServices);
      chain(additionalServices)
        .filter((additionalService: AdditionalServicesType) => (
          includes(keysOfSelectedAdditionalServices, additionalService.systemTitle)
        ))
        .forEach((additionalService: AdditionalServicesType) => (
          assign(objectWithValuesForFinalCalculations, { [additionalService.systemTitle]: additionalService.price })))
        .value();
    }
    if (deliveryPrice !== 0) {
      assign(objectWithValuesForFinalCalculations, { deliveryPrice });
    }
    if (measurementPrice !== 0) {
      assign(objectWithValuesForFinalCalculations, { measurementPrice });
    }
    forEach(objectWithValuesForFinalCalculations, (value: string | number) => sum += toNumber(value));
    return sum;
  }
);
