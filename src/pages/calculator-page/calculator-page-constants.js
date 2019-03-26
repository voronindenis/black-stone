// @flow
import type { SelectOptionsType } from '@/components/inputs/select-input';
import { createBlock } from '@/utils/bem-helper';
import type { AdditionalServicesType } from '@/modules/price-list';
import {
  firstStepRenderContentFunction,
  secondStepRenderContentFunction,
  thirdStepRenderContentFunction,
  fourStepRenderContentFunction,
  fiveStepRenderContentFunction,
  totalStepRenderContentFunction,
} from './calculator-page-steps-render-functions';
import type { TotalStepArgumentsType, FourStepArgumentsType } from './calculator-page-types';
import LINE_COUNTERTOP_TYPE_LABEL from './assets/countertop-types-labels/line-cointertop-label.jpg';
import G_COUNTERTOP_TYPE_LABEL from './assets/countertop-types-labels/g-countertop-label.jpg';
import P_COUNTERTOP_TYPE_LABEL from './assets/countertop-types-labels/p-countertop-label.jpg';

const block = createBlock('calculator-page');

export const CALCULATOR_PAGE_CLASS_NAMES = {
  CALCULATOR_PAGE_CLASS_NAME: block.block(),
  CONTERTOP_SIZES_FORM_SECTION_CONTAINER_WRAPPER_CLASS_NAME: block.element('countertop_sizes_form_section_container_wrapper'),
  CONTERTOP_SIZES_FORM_SECTION_CONTAINER_CLASS_NAME: block.element('countertop_sizes_form_section_container'),
  CONTERTOP_SIZES_FORM_SECTION_ROW_CLASS_NAME: block.element('countertop_sizes_from_section_row'),
  CONTERTOP_SIZES_FORM_SECTION_FORM_CONTENT_CLASS_NAME: block.element('countertop_sizes_form_content'),
  CONTERTOP_SIZES_FORM_SECTION_CLASS_NAME: block.element('countertop_sizes_from_section'),
  LINE_COUNTERTOP_TYPE_IMAGE_CLASS_NAME: block.element('line_countertop_type_image'),
  G_COUNTERTOP_TYPE_IMAGE_CLASS_NAME: block.element('g_countertop_type_image'),
  P_COUNTERTOP_TYPE_IMAGE_CLASS_NAME: block.element('p_countertop_type_image'),
  BOWLS_CONTAINER_CLASS_NAME: block.element('bowls_container'),
  BOWLS_TITLE: block.element('bowls_title'),
};

export const CALCULATOR_FORM_NAME = 'calkulator-form';

export const COUNTERTOP_TYPES = [
  {
    title: 'Прямая столешница',
    image: LINE_COUNTERTOP_TYPE_LABEL,
    value: 'lineType',
  },
  {
    title: 'Г-образная столешница',
    image: G_COUNTERTOP_TYPE_LABEL,
    value: 'gType',
  },
  {
    title: 'П-образная столешница',
    image: P_COUNTERTOP_TYPE_LABEL,
    value: 'pType',
  },
];

export const COUNTERTOP_TYPES_ENUM = {
  LINE_TYPE: 'lineType',
  G_TYPE: 'gType',
  P_TYPE: 'pType',
};

export const CALCULATOR_STEPS = [
  {
    number: '1',
    title: 'Выберите производителя',
    renderContent: (manufacturersOptions: SelectOptionsType[]) => firstStepRenderContentFunction(manufacturersOptions),
  },
  {
    number: '2',
    title: 'Выберите серию камня',
    renderContent: (seriesOptions: SelectOptionsType[]) => secondStepRenderContentFunction(seriesOptions),
  },
  {
    number: '3',
    title: 'Выберите тип столешницы',
    renderContent: () => thirdStepRenderContentFunction(),
  },
  {
    number: '4',
    title: 'Укажите размеры',
    renderContent: (props: FourStepArgumentsType) => fourStepRenderContentFunction(props),
  },
  {
    number: '5',
    title: 'Дополнительные услуги',
    renderContent: (additionalServices: AdditionalServicesType[]) => fiveStepRenderContentFunction(additionalServices),
  },
  {
    number: null,
    title: 'Итого:',
    renderContent: (props: TotalStepArgumentsType) => totalStepRenderContentFunction(props),
  },
];

export const TEMPORARY_CALCULATOR_FORM_FIELD_NAMES = {
  A_LENGTH: 'aLength',
  B_LENGTH: 'bLength',
  C_LENGTH: 'cLength',
  WIDTH: 'width',
  IS_NEED_CORNER_PROCESSING: 'isNeedCornerProcessing',
  IS_NEED_WALL_BOARD: 'isNeedWallBoard',
  IS_NEED_END_EDGE: 'isNeedEndEdge',
  IS_NEED_STONE_WASHING: 'isNeedStoneWashing',
  IS_NEED_ADDITIONAL_STONE_WASHING: 'isNeedAdditionalStoneWashing',
  WALL_BOARD: 'wallBoard',
  EDGE_PROCESS: 'edgeProcess',
  MAIN_BOWL: 'mainBowl',
  ADDITIONAL_BOWL: 'additionalBowl',
};
