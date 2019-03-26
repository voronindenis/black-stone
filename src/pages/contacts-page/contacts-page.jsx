// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import { SimpleHeadingOfPage } from '@/modules/simple-heading-of-page';
import { ContactForm } from '@/modules/contact-form';
import { ICON_INFO_BLOCKS } from './contacts-page-constants';
import './assets/contacts-page.sass';

const block = createBlock('contacts-page-content');

export const ContactsPage = () => (
  <div className={block.block()}>
    <Container className={block.element('container')}>
      <Row className={block.element('row')}>
        <SimpleHeadingOfPage
          title="Контакты"
          description="Компания «BlackStone» работает на столичном рынке в качестве производителя и поставщика собственной
            продукции – изделий из искусственного акрилового камня и кварцевого агломерата."
          iconsInfoBlocks={ICON_INFO_BLOCKS}
        />
      </Row>
      <Row className={block.element('row')}>
        <Col lg="7" className={block.element('map_container')}>
          <div className={block.element('map_wrapper')}>
            <iframe
              title="map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A93c05981f82e54dc26dfedf2c5890a9489b5b76fd3771707661f0495b6d10393&amp;source=constructor"
              width="100%"
              height="460"
              frameBorder="0"
            />
          </div>
        </Col>
        <Col lg="5" className={block.element('form_container')}>
          <div className={block.element('form_wrapper')}>
            <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
