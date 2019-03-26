// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import type { ProductCardsType } from '@/modules/catalog';
import { HeadingOfPage } from '@/modules/heading-of-page';
import { DescriptionOfProduct } from '@/modules/description-of-product';
import { Catalog } from '@/modules/catalog';
import { DESCRIPTION_TEXT, ADVANTAGES, OFFER_TEXT } from './bar-counters-page-constants';
import barCounterPageHeadingImg from './assets/bar-counter-image.png';
import barCounterScheme from './assets/bar-counter-scheme.png';
import './assets/bar-counters-page.sass';

const block = createBlock('bar-counters-page-content');

type BarCountersPagePropsType = {
  productCards: ProductCardsType[],
};

export const BarCountersPage = (props: BarCountersPagePropsType) => (
  <section className={block.block()}>
    <section className={block.element('heading_of_page')}>
      <HeadingOfPage
        img={barCounterPageHeadingImg}
        heading="Барные стойки"
        description="Из искусственного камня собственного производства"
      />
    </section>
    <section className={block.element('description_of_product')}>
      <DescriptionOfProduct
        descriptionTitle="Барные стойки из искусственного камня от компании BlackStone"
        descriptionText={DESCRIPTION_TEXT}
        advantages={ADVANTAGES}
        offerTitle="Почему барная стойка из камня лучше"
        offerText={OFFER_TEXT}
        offerImage={barCounterScheme}
      />
    </section>
    <section className={block.element('catalog')}>
      <Catalog type="slider" productCards={props.productCards} />
    </section>
  </section>
);
