// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PATH } from '@/routes';
import { Button } from '@/components/buttons/button';
import { createBlock } from '@/utils/bem-helper';
import './assets/heading-of-page.sass';

const block = createBlock('heading-of-page');

type HeadingOfPageProps = {
  img: string,
  heading: string,
  description: string,
};

// TODO [Denis_Voronin] 04/01/2019 Add background-color

export const HeadingOfPage = ({
  img,
  heading,
  description,
}: HeadingOfPageProps) => (
  <Container className={block.block()}>
    <Row className={block.element('row')}>
      <Col lg="6" className={block.element('img-container')}>
        <div className={block.element('img-substrate-level-one')}>
          <div className={block.element('img-substrate-level-two')}>
            <img
              src={img}
              alt={heading}
              className={block.element('img')}
            />
          </div>
        </div>
      </Col>
      <Col lg="6" className={block.element('heading-container')}>
        <div className={block.element('heading')}>
          <h1 className={block.element('heading-text')}>{heading}</h1>
        </div>
        <div className={block.element('description')}>
          <p className={block.element('description-text')}>{description}</p>
        </div>
        <Link to={PATH.calculator}>
          <Button
            label="Онлайн калькулятор"
            type="primary"
          />
        </Link>
      </Col>
    </Row>
  </Container>
);
