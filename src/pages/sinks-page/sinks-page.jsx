// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import type { ProductCardsType } from '@/modules/catalog';
import { HeadingOfPage } from '@/modules/heading-of-page';
import { DescriptionOfProduct } from '@/modules/description-of-product';
import { Catalog } from '@/modules/catalog';
import { DESCRIPTION_TEXT, ADVANTAGES, OFFER_TEXT } from './sinks-page-constants';
import SinksPageHeadingImg from './assets/sinks-image.png';
import SinksScheme from './assets/sinks-scheme.png';
import './assets/sinks-page.sass';

const block = createBlock('sinks-page-content');

type SinksPagePropsType = {
  productCards: ProductCardsType[],
};

export const SinksPage = (props: SinksPagePropsType) => (
  <section className={block.block()}>
    <section className={block.element('heading_of_page')}>
      <HeadingOfPage
        img={SinksPageHeadingImg}
        heading="Мойки"
        description="Из искусственного камня собственного производства"
      />
    </section>
    <section className={block.element('description_of_product')}>
      <DescriptionOfProduct
        descriptionTitle="Мойки из искусственного камня от компании BlackStone"
        descriptionText={DESCRIPTION_TEXT}
        advantages={ADVANTAGES}
        offerTitle="Почему мойка из камня лучше нержавейки"
        offerText={OFFER_TEXT}
        offerImage={SinksScheme}
      />
    </section>
    <section className={block.element('catalog')}>
      <Catalog type="slider" productCards={props.productCards} />
    </section>
  </section>
);
