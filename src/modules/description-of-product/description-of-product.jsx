// @flow
import * as React from 'react';
import { map } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import { Button } from '@/components/buttons/button';
import { ContactForm } from '@/modules/contact-form';
import { Modal } from '@/modules/modal';
import type { advantagesType } from './description-of-product-types';
import './assets/description-of-product.sass';

const block = createBlock('description-of-product');

type DescriptionOfProductPropsType = {
  descriptionTitle: string,
  descriptionText: string,
  advantages: advantagesType[],
  offerTitle: string,
  offerText: string,
  offerImage: string,
};

type DescriptionOfProductStateType = {
  open: boolean,
};

export class DescriptionOfProduct extends React.PureComponent
  <DescriptionOfProductPropsType, DescriptionOfProductStateType> {
  state = {
    open: false,
  };

  handleClick = () => this.setState({ open: true });

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      descriptionTitle,
      descriptionText,
      advantages,
      offerTitle,
      offerText,
      offerImage,
    } = this.props;
    return (
      <div className={block.block()}>
        <Modal
          size="tiny"
          header="Свяжемся с Вами в течение 10 минут"
          children={<ContactForm />}
          open={this.state.open}
          close={this.close}
        />
        <div className={block.element('space')} />
        <Container className={block.element('description_container')}>
          <Row className={block.element('description_row')}>
            <Col lg="5" className={block.element('description_title_container')}>
              <h2 className={block.element('description_title')}>
                {descriptionTitle}
              </h2>
            </Col>
            <Col lg="7" className={block.element('description_text_container')}>
              <p className={block.element('description_text')}>
                {descriptionText}
              </p>
            </Col>
          </Row>
        </Container>
        <Container className={block.element('advantages_and_offer_container')}>
          <Row className={block.element('advantages_and_offer_row')}>
            <Col lg="5" className={block.element('advantages_container')}>
              {
                map(advantages, (advantage:advantagesType) => (
                  <div className={block.element('advantage')} key={advantage.id}>
                    <p className={block.element('advantage_number')}>
                      {advantage.id}
                    </p>
                    <p className={block.element('advantage_text')}>
                      {advantage.text}
                    </p>
                  </div>
                ))
              }
              <div className={block.element('button_container')}>
                <Button
                  type="primary"
                  label="Оставить заявку"
                  onClick={this.handleClick}
                />
              </div>
            </Col>
            <Col lg="7" className={block.element('offer_container')}>
              <h2 className={block.element('offer_title')}>
                {offerTitle}
              </h2>
              <p className={block.element('offer_text')}>
                {offerText}
              </p>
              <img
                className={block.element('offer_image')}
                src={offerImage}
                alt={offerTitle}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
