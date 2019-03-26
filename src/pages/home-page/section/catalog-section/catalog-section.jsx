// @flow
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import { Sidebar } from '@/modules/sidebar';
import { Catalog } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { SIDEBAR_MENU_ITEMS } from './catalog-section-constants';
import './assets/catalog-section.sass';

const block = createBlock('catalog-section');

type CatalogSectionType ={
  productCards: ProductCardsType[],
};

export const CatalogSection = (props:CatalogSectionType) => (
  <Container fluid className={block.block()}>
    <Row className={block.element('row')}>
      <Col lg="3" className={block.element('menu')}>
        <Sidebar menuItems={SIDEBAR_MENU_ITEMS} />
      </Col>
      <Col lg="9" className={block.element('content')}>
        <div className={block.element('content_text')}>
          <h2 className={block.element('content_title')}>
            Наши работы
            <br />
            Наша гордость
          </h2>
          <p className={block.element('content_trigger')}>Выполнили более 1000 заказов</p>
        </div>
        <Catalog
          type="range"
          productCards={props.productCards}
        />
      </Col>
    </Row>
  </Container>
);
