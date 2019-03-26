// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import { HeadingOfPage } from '@/modules/heading-of-page';
import type { ProductCardsType } from '@/modules/catalog';
import { IconInfoRowSection } from './section/icon-info-row-section';
import { OffersSection } from './section/offers-section';
import { PromptingSection } from './section/prompting-section';
import { CatalogSection } from './section/catalog-section';
import { ReviewsSection } from './section/reviews-section';
import { StagesSection } from './section/stages-section';
import { SendApplicationSection } from './section/send-application-section';
import homePageHeadingImg from './assets/home-page-heading-img.png';
import './assets/home-page.sass';

const block = createBlock('home-page-content');

type HomePagePropsType = {
  productCards: ProductCardsType[],
};

export const HomePage = (props:HomePagePropsType) => (
  <section className={block.block()}>
    <section className={block.element('heading_of_page')}>
      <HeadingOfPage
        img={homePageHeadingImg}
        heading="Столешницы и подоконники"
        description="Из искусственного камня собственного производства"
      />
    </section>
    <section className={block.element('icon_info_row')}>
      <IconInfoRowSection />
    </section>
    <section className={block.element('offers')}>
      <OffersSection />
    </section>
    <section className={block.element('prompting')}>
      <PromptingSection />
    </section>
    <section className={block.element('catalog')}>
      <CatalogSection productCards={props.productCards} />
    </section>
    <section className={block.element('reviews')}>
      <ReviewsSection />
    </section>
    <section className={block.element('stages')}>
      <StagesSection />
    </section>
    <section className={block.element('send_application')}>
      <SendApplicationSection />
    </section>
  </section>
);
