// @flow
import * as React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { PATH } from '@/routes';
import { createBlock } from '@/utils/bem-helper';
import { Button } from '@/components/buttons/button';
import { ContactForm } from '@/modules/contact-form';
import { Modal } from '@/modules/modal';
import type { MenuCenterContentType } from './menu-types';
import './menu.sass';

const block = createBlock('header_menu');

type MenuPropsType = {
  leftButtonLabel?: string,
  rightButtonLabel?: string,
  menuItems?: Array<MenuCenterContentType>,
};

type MenuStateType = {
  open: boolean,
};

export class Menu extends React.PureComponent<MenuPropsType, MenuStateType> {
  state = {
    open: false,
  };

  handleClick = () => this.setState({ open: true });

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      leftButtonLabel,
      rightButtonLabel,
      menuItems,
    } = this.props;
    return (
      <div className={block.block()}>
        <Container className={block.element('container')}>
          <Modal
            size="tiny"
            header="Свяжемся с Вами в течение 10 минут"
            children={<ContactForm />}
            open={this.state.open}
            close={this.close}
          />
          <Row className={block.element('row')}>
            <Col lg="3" className={block.element('left-content')}>
              <Button
                className={block.element('button')}
                label={leftButtonLabel}
                type="secondary"
                onClick={this.handleClick}
              />
            </Col>
            <Col lg="6" className={block.element('center-content')}>
              {
                map(menuItems, (item: MenuCenterContentType) => (
                  <Link
                    to={item.link}
                    className={block.element('link')}
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                ))
              }
            </Col>
            <Col lg="3" className={block.element('right-content')}>
              <Link to={PATH.calculator}>
                <Button
                  className={block.element('button')}
                  label={rightButtonLabel}
                  type="secondary"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
