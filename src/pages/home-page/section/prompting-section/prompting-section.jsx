// @flow
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Button } from '@/components/buttons/button';
import { createBlock } from '@/utils/bem-helper';
import { Modal } from '@/modules/modal';
import { ContactForm } from '@/modules/contact-form';
import promptingImage from './assets/prompting-img.png';
import './assets/prompting-section.sass';

const block = createBlock('prompting-section');

type PromptingSectionStateType = {
  open: boolean,
};

export class PromptingSection extends React.PureComponent<{}, PromptingSectionStateType> {
  state = {
    open: false,
  };

  handleClick = () => this.setState({ open: true });

  close = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className={block.block()}>
        <Modal
          size="tiny"
          header="Свяжемся с Вами в течение 10 минут"
          children={<ContactForm />}
          open={this.state.open}
          close={this.close}
        />
        <Container className={block.element('container')}>
          <Row className={block.element('row')}>
            <Col lg="7" className={block.element('text_container')}>
              <div className={block.element('heading')}>
                <h1 className={block.element('heading-text')}>
                  Cделаем столешницу индивидуально
                  <br />
                  для вас
                </h1>
              </div>
              <div className={block.element('description')}>
                <p className={block.element('description-text')}>Для этого оставьте заявку</p>
              </div>
              <Button
                label="Оставьте заявку"
                type="primary"
                onClick={this.handleClick}
              />
            </Col>
            <Col lg="5" className={block.element('img_container')}>
              <img src={promptingImage} alt="Cделаем столешницу индивидуально для вас" className={block.element('img')} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
