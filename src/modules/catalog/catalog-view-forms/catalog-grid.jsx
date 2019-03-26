// @flow
import * as React from 'react';
// $FlowIgnore
import { CSSTransitionGroup } from 'react-transition-group';
import { map } from 'lodash';
import { createBlock } from '@/utils/bem-helper';
import { createLink } from '@/utils/route-utils';
import { PreviewProductCard } from '@/components/preview-product-card';
import type { ProductCardsType } from '../catalog-types';
import './assets/catalog-view-forms.sass';

const block = createBlock('catalog-grid');

type CatalogRangePropsType = {
  productCards: ProductCardsType[],
};

export const CatalogGrid = (props:CatalogRangePropsType) => (
  <div className={block.block()}>
    <CSSTransitionGroup
      className={block.element('transition')}
      transitionName="product-cards"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {
        map(props.productCards, (productCard: ProductCardsType) => (
          <PreviewProductCard
            key={productCard.id}
            image={productCard.image}
            title={productCard.title}
            price={productCard.price}
            link={createLink(productCard.category, productCard.id) || '/'}
          />
        ))
      }
    </CSSTransitionGroup>
  </div>
);
