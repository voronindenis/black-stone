// @flow
import * as React from 'react';
import { filter, get } from 'lodash';
import { withRouter } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { compose } from '@/utils/compose';
import { withCatalog } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { ProductCardPage } from './product-card-page';

type ProductCardPageControllerComponentPropsType = {
  productCards: ProductCardsType[],
  match: Match,
};

type ProductCardPageControllerComponentStateType = {
  productCard: ProductCardsType,
};

class ProductCardPageControllerComponent extends
  React.PureComponent<ProductCardPageControllerComponentPropsType, ProductCardPageControllerComponentStateType> {
  state = {
    productCard: {
      id: '',
      image: '',
      title: '',
      price: '',
      description: '',
      category: '',
      photos: [],
    },
  };

  static getDerivedStateFromProps(nextProps, state) {
    let productCard;
    if (state.productCards !== nextProps.productCards) {
      productCard = get(filter(
        nextProps.productCards,
        (item: ProductCardsType) => item.id === nextProps.match.params.id
      ), '0', null);
    }
    return {
      productCard,
    };
  }

  render() {
    return (
      <ProductCardPage productCard={this.state.productCard} productCards={this.props.productCards} />
    );
  }
}

export const ProductCardPageController = compose(
  withCatalog,
  withRouter,
)(ProductCardPageControllerComponent);
