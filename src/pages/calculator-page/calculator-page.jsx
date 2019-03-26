// @flow
import * as React from 'react';
import { map } from 'lodash';
import type { BasePriceListType, AdditionalServicesType } from '@/modules/price-list';
import { StepContainer } from '@/components/step-container';
import type { SelectOptionsType } from '@/components/inputs/select-input';
import { CALCULATOR_STEPS, CALCULATOR_PAGE_CLASS_NAMES } from './calculator-page-constants';
import type { CalculatorStepType, CountertopElementsSizesType } from './calculator-page-types';
import './assets/calculator-page.sass';

type CalculatorPagePropsType = {
  manufacturersOptions: SelectOptionsType[],
  seriesOptions: SelectOptionsType[],
  isFirstStepCompleted: boolean,
  isSecondStepCompleted: boolean,
  countertopType?: string,
  isNeedWallBoard?: boolean,
  isNeedEndEdge?: boolean,
  wallBoardsOptions: SelectOptionsType[],
  edgeProcessingOptions: SelectOptionsType[],
  mainBowls: BasePriceListType[],
  additionalBowls: BasePriceListType[],
  isNeedStoneWashing: boolean,
  isNeedAdditionalStoneWashing: boolean,
  isFourStepCompleted: boolean,
  additionalServices: AdditionalServicesType[],
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

export class CalculatorPage extends React.PureComponent<CalculatorPagePropsType> {
  getMatchingArguments = (step: string) => {
    switch (step) {
      case '1':
        return this.props.manufacturersOptions;
      case '2':
        return this.props.seriesOptions;
      case '3':
        return null;
      case '4':
        return ({
          countertopType: this.props.countertopType,
          isNeedWallBoard: this.props.isNeedWallBoard,
          isNeedEndEdge: this.props.isNeedEndEdge,
          wallBoardsOptions: this.props.wallBoardsOptions,
          edgeProcessingOptions: this.props.edgeProcessingOptions,
          mainBowls: this.props.mainBowls,
          additionalBowls: this.props.additionalBowls,
          isNeedStoneWashing: this.props.isNeedStoneWashing,
          isNeedAdditionalStoneWashing: this.props.isNeedAdditionalStoneWashing,
        });
      case '5':
        return this.props.additionalServices;
      default:
        return ({
          manufacturer: this.props.manufacturer,
          deliveryPrice: this.props.deliveryPrice,
          measurementPrice: this.props.measurementPrice,
          sizes: this.props.sizes,
          totalSum: this.props.totalSum,
          installationPrice: this.props.installationPrice,
          series: this.props.series,
          cornerProcessingPriceValue: this.props.cornerProcessingPriceValue,
          wallBoardPrice: this.props.wallBoardPrice,
          endEdgePrice: this.props.endEdgePrice,
        });
    }
  };

  checkIsVisibleStep = (step: string) => {
    switch (step) {
      case '1':
        return true;
      case '2':
        return this.props.isFirstStepCompleted;
      case '3':
        return this.props.isSecondStepCompleted;
      case '4':
        return Boolean(this.props.countertopType);
      case '5':
        return this.props.isFourStepCompleted;
      default:
        return this.props.isFourStepCompleted;
    }
  };

  render() {
    return (
      <div className={CALCULATOR_PAGE_CLASS_NAMES.CALCULATOR_PAGE_CLASS_NAME}>
        {
          map(CALCULATOR_STEPS, (step: CalculatorStepType) => (
            <StepContainer
              key={step.number}
              number={step.number}
              title={step.title}
              children={step.renderContent(this.getMatchingArguments(step.number))}
              visible={this.checkIsVisibleStep(step.number)}
            />
          ))
        }
      </div>
    );
  }
}
