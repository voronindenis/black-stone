// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import type { ProductCardsType } from '@/modules/catalog';
import { HeadingOfPage } from '@/modules/heading-of-page';
import { DescriptionOfProduct } from '@/modules/description-of-product';
import { Catalog } from '@/modules/catalog';
import { DESCRIPTION_TEXT, ADVANTAGES, OFFER_TEXT } from './countertops-page-constants';
import countertopPageHeadingImg from './assets/countertop-image.png';
import countertopScheme from './assets/countertop-scheme.png';
import './assets/countertops-page.sass';

const block = createBlock('countertops-page-content');

type CountertopPagePropsType = {
  productCards: ProductCardsType[],
};

export const CountertopsPage = (props: CountertopPagePropsType) => (
  <section className={block.block()}>
    <section className={block.element('heading_of_page')}>
      <HeadingOfPage
        img={countertopPageHeadingImg}
        heading="Кухонная столешница"
        description="Из искусственного камня собственного производства"
      />
    </section>
    <section className={block.element('description_of_product')}>
      <DescriptionOfProduct
        descriptionTitle="Кухонная столешница из искусственного камня от компании BlackStone"
        descriptionText={DESCRIPTION_TEXT}
        advantages={ADVANTAGES}
        offerTitle="Столешницы на заказ из искусственного камня от производителя"
        offerText={OFFER_TEXT}
        offerImage={countertopScheme}
      />
    </section>
    <section className={block.element('catalog')}>
      <Catalog type="slider" productCards={props.productCards} />
    </section>
  </section>
);
