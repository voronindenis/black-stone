// @flow
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import { CommentsSlider } from '@/modules/comments-slider';
import './assets/review-section.sass';

const block = createBlock('review-section');

export const ReviewsSection = () => (
  <div className={block.block()}>
    <div className={block.element('dimmer')}>
      <Container className={block.element('container')}>
        <Row className={block.element('row')}>
          <Col lg="3" className={block.element('description')}>
            <h2 className={block.element('title')}>
              Отзывы
            </h2>
            <span className={block.element('count')}>
            350
            </span>
            <div className={block.element('divider')} />
            <p className={block.element('text')}>
              Человек уже получили
              <br />
              нашу продукцию и
              <br />
              остались довольны!
            </p>
          </Col>
          <Col lg="9" className={block.element('content')}>
            <CommentsSlider />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);
