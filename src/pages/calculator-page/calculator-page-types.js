// @flow
import * as React from 'react';
import type { SelectOptionsType } from '@/components/inputs/select-input';
import type { BasePriceListType } from '@/modules/price-list';

export type CalculatorStepType = {
  number: string,
  title: string,
  renderContent: (...arg: any) => React.Node,
};

export type CalculatorFormValuesType = {
  manufacturer: string,
  seria: string,
  countertopType: string,
  aLength: string,
  bLength: string,
  cLength: string,
  width: string,
  isNeedCornerProcessing: boolean,
  isNeedWallBoard: boolean,
  isNeedEndEdge: boolean,
  isNeedStoneWashing: boolean,
  isNeedAdditionalStoneWashing: boolean,
  edgeProcess: string,
  wallBoard: string,
  mainBowl: string,
  additionalBowl: string,
  isNeedCutoutUnderTheSink: boolean,
  isNeedCutoutUnderTheHob: boolean,
  isNeedGluingTheSinkUnderTheTabletop: boolean,
  isNeedGroovesForWaterDrainSet: boolean,
  isNeedHotRods: boolean,
  isNeedDelivery: {
    additionalDistance: string,
  } | boolean,
  isNeedMeasurement: {
    additionalDistance: string,
  } | boolean,
};

export type CountertopSizeType = {
  aLength?: string,
  bLength?: string,
  cLength?: string,
  width?: string,
};

export type CountertopElementsSizesType = {
  area?: number,
  edgeLength?: number,
  wallLength?: number,
};

export type FourStepArgumentsType = {
  countertopType: string,
  isNeedWallBoard?: boolean,
  isNeedEndEdge?: boolean,
  wallBoardsOptions: SelectOptionsType[],
  edgeProcessingOptions: SelectOptionsType[],
  mainBowls: BasePriceListType[],
  additionalBowls: BasePriceListType[],
  isNeedStoneWashing: boolean,
  isNeedAdditionalStoneWashing: boolean,
};

export type TotalStepArgumentsType = {
  manufacturer: string,
  deliveryPrice: number,
  measurementPrice: number,
  sizes: CountertopElementsSizesType,
  totalSum: number,
  installationPrice: string,
  series: string,
  cornerProcessingPriceValue: number,
  wallBoardPrice: number,
  endEdgePrice: number,
};
