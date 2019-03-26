// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import type { ProductCardsType } from '@/modules/catalog';
import { HeadingOfPage } from '@/modules/heading-of-page';
import { DescriptionOfProduct } from '@/modules/description-of-product';
import { Catalog } from '@/modules/catalog';
import { DESCRIPTION_TEXT, ADVANTAGES, OFFER_TEXT } from './tables-page-constants';
import tablesPageHeadingImg from './assets/tables-image.png';
import tablesScheme from './assets/tables-scheme.png';
import './assets/tables-page.sass';

const block = createBlock('tables-page-content');

type TablesPagePropsType = {
  productCards: ProductCardsType[],
};

export const TablesPage = (props: TablesPagePropsType) => (
  <section className={block.block()}>
    <section className={block.element('heading_of_page')}>
      <HeadingOfPage
        img={tablesPageHeadingImg}
        heading="Столы"
        description="Из искусственного камня собственного производства"
      />
    </section>
    <section className={block.element('description_of_product')}>
      <DescriptionOfProduct
        descriptionTitle="Столы из искусственного камня от компании BlackStone"
        descriptionText={DESCRIPTION_TEXT}
        advantages={ADVANTAGES}
        offerTitle="Столы на заказ из искусственного камня от производителя"
        offerText={OFFER_TEXT}
        offerImage={tablesScheme}
      />
    </section>
    <section className={block.element('catalog')}>
      <Catalog type="slider" productCards={props.productCards} />
    </section>
  </section>
);
