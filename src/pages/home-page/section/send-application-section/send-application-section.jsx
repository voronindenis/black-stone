// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from '@/components/buttons/button';
import { PhoneInput } from '@/components/inputs/phone-input';
import { createBlock } from '@/utils/bem-helper';
import './assets/send-application-section.sass';
import image from './assets/image-for-send-application-section.png';

const block = createBlock('send-application-section');

// TODO [Denis_Voronin] 27/12/2018 create backward interaction to send mail

export const SendApplicationSection = () => (
  <Container className={block.block()}>
    <Row className={block.element('row')}>
      <Col lg="6" className={block.element('form_content')}>
        <h1 className={block.element('title')}>
          Оставьте заявку
        </h1>
        <span className={block.element('divider')} />
        <p className={block.element('text')}>
          Менеджер свяжется с вами
        </p>
        <div className={block.element('form')}>
          <div className={block.element('phone_field')}>
            <PhoneInput icon />
          </div>
          <Button
            type="primary"
            label="Оставить заявку"
          />
        </div>
      </Col>
      <Col lg="6" className={block.element('img_container')}>
        <img
          src={image}
          alt="BlackStone"
          className={block.element('img')}
        />
      </Col>
    </Row>
  </Container>
);
