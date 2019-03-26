// @flow
import * as React from 'react';
import { map } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { IconInfoBlock } from '@/components/info-blocks/icon-info-block';
import { createBlock } from '@/utils/bem-helper';
import { RowInfoBlock } from '../submodules/row-info-block';
import { LinksRow } from '../submodules/links-row';
import { LinksRowsItems, IconInfoBlockItems, PaymentSystems } from './footer-constants';
import type { IconInfoBlockItemsType } from './footer-types';
import './assets/footer.sass';

const block = createBlock('footer');

const isBackGroundColorControl = true;

export const Footer = () => (
  <footer className={block.block()}>
    <LinksRow
      linksRowsItems={LinksRowsItems}
    />
    <Container className={block.element('icon-info-block')}>
      <Row className={block.element('icon-info-block-row')}>
        <Col lg="12" className={block.element('icon-info-block-content')}>
          {
            map(IconInfoBlockItems, (item: IconInfoBlockItemsType) => (
              <IconInfoBlock
                key={item.id}
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            ))
          }
        </Col>
      </Row>
    </Container>
    <div className={block.element('row_info_block_wrapper')}>
      <RowInfoBlock
        leftContent={<p>Green stone 2019</p>}
        centerContent={PaymentSystems}
        rightContent={(
          <p>
            Design by Nick Poll
            <br />
            Develop by Denis Voronin
          </p>
        )}
        backGroundColor={isBackGroundColorControl}
      />
    </div>
  </footer>
);
