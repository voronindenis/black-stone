// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import type { ProductCardsType } from '@/modules/catalog';
import { HeadingOfPage } from '@/modules/heading-of-page';
import { DescriptionOfProduct } from '@/modules/description-of-product';
import { Catalog } from '@/modules/catalog';
import { DESCRIPTION_TEXT, ADVANTAGES, OFFER_TEXT } from './window-sills-page-constants';
import windowSillsPageHeadingImg from './assets/window-sills-image.png';
import windowSillsScheme from './assets/window-sills-scheme.png';
import './assets/window-sills-page.sass';

const block = createBlock('window-sills-page-content');

type WindowSillsPagePropsType = {
  productCards: ProductCardsType[],
};

export const WindowSillsPage = (props:WindowSillsPagePropsType) => (
  <section className={block.block()}>
    <section className={block.element('heading_of_page')}>
      <HeadingOfPage
        img={windowSillsPageHeadingImg}
        heading="Подоконники"
        description="Из искусственного камня собственного производства"
      />
    </section>
    <section className={block.element('description_of_product')}>
      <DescriptionOfProduct
        descriptionTitle="Подоконники из искусственного камня от компании BlackStone"
        descriptionText={DESCRIPTION_TEXT}
        advantages={ADVANTAGES}
        offerTitle="Подоконники на заказ из искусственного камня от производителя"
        offerText={OFFER_TEXT}
        offerImage={windowSillsScheme}
      />
    </section>
    <section className={block.element('catalog')}>
      <Catalog type="slider" productCards={props.productCards} />
    </section>
  </section>
);
