// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm, change } from 'redux-form';
import {
  map, find, get, omit, isEmpty, forEach,
} from 'lodash';
import { compose } from '@/utils/compose';
import { withPriceList, getInstallationPrice } from '@/modules/price-list';
import type {
  PriceListType,
  PriceListValuesType,
  ManufacturersPriceListType,
  BasePriceListType,
} from '@/modules/price-list';
import { CalculatorPage } from './calculator-page';
import {
  getManufacturer,
  getSeries,
  getCountertopType,
  checkIsNeedWallBoard,
  checkIsNeedEndEdge,
  checkIsNeedStoneWashing,
  checkIsNeedAdditionalStoneWashing,
  getCountertopSize,
  getDeliveryPrice,
  getMeasurementPrice,
  getSizes,
  getTotalSum,
  getCornerProcessingPriceValue,
  getWallBoardPrice,
  getEndEdgePrice,
  getEndEdgeTypePrice,
  getWallBoardTypePrice,
} from './calculator-page-selectors';
import { CALCULATOR_FORM_NAME, TEMPORARY_CALCULATOR_FORM_FIELD_NAMES } from './calculator-page-constants';
import type { CountertopSizeType, CountertopElementsSizesType } from './calculator-page-types';

type CalculatorPageControllerComponentPropsType = {
  priceList: PriceListType,
  series: string,
  countertopType: string,
  isNeedWallBoard: boolean,
  isNeedEndEdge: boolean,
  isNeedStoneWashing: boolean,
  isNeedAdditionalStoneWashing: boolean,
  countertopSize: CountertopSizeType,
  manufacturer: string,
  deliveryPrice: number,
  measurementPrice: number,
  sizes: CountertopElementsSizesType,
  totalSum: number,
  installationPrice: string,
  change: Function,
  cornerProcessingPriceValue: number,
  wallBoardPrice: number,
  endEdgePrice: number,
  endEdgeTypePrice: number,
  wallBoardTypePrice: number,
};

class CalculatorPageControllerComponent extends React.PureComponent<CalculatorPageControllerComponentPropsType> {
  componentDidUpdate = (prevProps: CalculatorPageControllerComponentPropsType) => {
    if (prevProps.countertopType !== this.props.countertopType) {
      forEach(TEMPORARY_CALCULATOR_FORM_FIELD_NAMES, (fieldName: string) => (
        this.props.change(CALCULATOR_FORM_NAME, fieldName, '')
      ));
    }
  };

  getManufacturersOptions = (priceList: ManufacturersPriceListType[]) => (
    map(priceList, (priceItem: ManufacturersPriceListType) => ({
      text: priceItem.title,
      value: priceItem.title,
      image: { avatar: true, src: priceItem.image },
    }))
  );

  getSeriesOptions = (priceList: ManufacturersPriceListType[], manufacturer: string) => {
    const manufacturerPrice = find(priceList, { title: manufacturer });
    const seriesOptions = map(get(manufacturerPrice, 'priceListValues'), (manufacturerPriceItem: PriceListValuesType) => ({
      text: `${manufacturerPriceItem.series}: ${manufacturerPriceItem.price}₽`,
      value: manufacturerPriceItem.price,
      image: { avatar: true, src: manufacturerPrice.image },
      key: Math.random(),
    }));
    return seriesOptions;
  };

  getWallBoardsOptions = (wallBoards: BasePriceListType[]) => (
    map(wallBoards, (wallBoard: BasePriceListType) => ({
      text: wallBoard.title,
      value: wallBoard.price,
      image: { avatar: true, src: wallBoard.image },
    }))
  );

  getEdgeProcessingOptions = (edgeProcessing: BasePriceListType[]) => (
    map(edgeProcessing, (edgeProcess: BasePriceListType) => ({
      key: Math.random(),
      text: edgeProcess.title,
      value: edgeProcess.price,
      image: { avatar: true, src: edgeProcess.image },
    }))
  );

  checkIsFourStepCompleted = () => {
    const areSizesDetermined = !isEmpty(this.props.countertopSize);
    if (this.props.isNeedWallBoard && this.props.isNeedEndEdge) {
      return areSizesDetermined && this.props.endEdgeTypePrice !== 0 && this.props.wallBoardTypePrice !== 0;
    }
    if (this.props.isNeedWallBoard) {
      return areSizesDetermined && this.props.wallBoardTypePrice !== 0;
    }
    if (this.props.isNeedEndEdge) {
      return areSizesDetermined && this.props.endEdgeTypePrice !== 0;
    }
    return areSizesDetermined;
  };

  render() {
    const manufacturersPriceList = get(this.props.priceList, 'manufacturersPriceList');
    const wallBoards = get(this.props.priceList, ['servicesPriceList', 'wallBoards']);
    const edgeProcessing = get(this.props.priceList, ['servicesPriceList', 'edgeProcessing']);
    const mainBowls = get(this.props.priceList, ['bowlsPriceList', 'mainBowls']);
    const additionalBowls = get(this.props.priceList, ['bowlsPriceList', 'additionalBowls']);
    const additionalServices = get(this.props.priceList, ['servicesPriceList', 'additionalServices']);
    return (
      <CalculatorPage
        manufacturersOptions={this.getManufacturersOptions(manufacturersPriceList)}
        seriesOptions={this.getSeriesOptions(manufacturersPriceList, this.props.manufacturer)}
        isFirstStepCompleted={Boolean(this.props.manufacturer)}
        isSecondStepCompleted={Boolean(this.props.series)}
        wallBoardsOptions={this.getWallBoardsOptions(wallBoards)}
        edgeProcessingOptions={this.getEdgeProcessingOptions(edgeProcessing)}
        mainBowls={mainBowls}
        additionalBowls={additionalBowls}
        isFourStepCompleted={this.checkIsFourStepCompleted()}
        additionalServices={additionalServices}
        {...omit(this.props, ['priceList'])}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  manufacturer: getManufacturer,
  series: getSeries,
  countertopType: getCountertopType,
  isNeedWallBoard: checkIsNeedWallBoard,
  isNeedEndEdge: checkIsNeedEndEdge,
  isNeedStoneWashing: checkIsNeedStoneWashing,
  isNeedAdditionalStoneWashing: checkIsNeedAdditionalStoneWashing,
  countertopSize: getCountertopSize,
  deliveryPrice: getDeliveryPrice,
  measurementPrice: getMeasurementPrice,
  sizes: getSizes,
  totalSum: getTotalSum,
  installationPrice: getInstallationPrice,
  cornerProcessingPriceValue: getCornerProcessingPriceValue,
  wallBoardPrice: getWallBoardPrice,
  endEdgePrice: getEndEdgePrice,
  endEdgeTypePrice: getEndEdgeTypePrice,
  wallBoardTypePrice: getWallBoardTypePrice,
});

export const CalculatorPageController = compose(
  reduxForm({
    form: CALCULATOR_FORM_NAME,
  }),
  withPriceList,
  connect(
    mapStateToProps,
    {
      change,
    }
  ),
)(CalculatorPageControllerComponent);
