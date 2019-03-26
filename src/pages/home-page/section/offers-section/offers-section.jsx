// @flow
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { map } from 'lodash';
import { PreviewPageBlock } from '@/components/preview-page-block';
import { createBlock } from '@/utils/bem-helper';
import { OFFER_LINKS } from './offers-section-constants';
import type { OfferLinksType } from './offers-section-types';
import './assets/offers-section.sass';

const block = createBlock('offers-section');

export const OffersSection = () => (
  <div className={block.block()}>
    <Container className={block.element('container')}>
      <Row className={block.element('row')}>
        <Col lg="12" className={block.element('content')}>
          <h2 className={block.element('title')}>У нас Вы можете заказать</h2>
        </Col>
        {
          map(OFFER_LINKS, (item: OfferLinksType) => (
            <Col lg={item.width} key={item.id}>
              <PreviewPageBlock
                img={item.img}
                title={item.title}
                link={item.link}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  </div>
);
