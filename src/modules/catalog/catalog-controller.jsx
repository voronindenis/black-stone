// @flow
import * as React from 'react';
import { isEqual, omit } from 'lodash';
import { CatalogGrid, CatalogRange, CatalogSlider } from './catalog-view-forms';
import type { ProductCardsType, CatalogViewTypes } from './catalog-types';

type CatalogControllerComponentPropsType = {
  type?: CatalogViewTypes,
  productCards: ProductCardsType[],
};

export const CatalogController = (props: CatalogControllerComponentPropsType) => {
  const { type } = props;
  if (isEqual(type, 'range')) {
    return <CatalogRange {...omit(props, 'type')} />;
  }
  if (isEqual(type, 'slider')) {
    return <CatalogSlider {...omit(props, 'type')} />;
  }
  return <CatalogGrid {...omit(props, 'type')} />;
};
