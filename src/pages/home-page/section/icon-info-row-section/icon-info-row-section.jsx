// @flow
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { map } from 'lodash';
import { IconInfoBlock } from '@/components/info-blocks/icon-info-block';
import { createBlock } from '@/utils/bem-helper';
import { TRIGGER_ITEMS_FOR_ICON_INFO_BLOCK } from './icon-info-row-section-constants';
import type { TriggerItemsForIconInfoBlockType } from './icon-info-row-section-types';
import './assets/icon-info-row-section.sass';

const block = createBlock('icon-info-row-section');

export const IconInfoRowSection = () => (
  <Container className={block.block()}>
    <Row className={block.element('row')}>
      <Col lg="12" className={block.element('content')}>
        {
          map(TRIGGER_ITEMS_FOR_ICON_INFO_BLOCK, (item: TriggerItemsForIconInfoBlockType) => (
            <React.Fragment key={item.id}>
              <div className={block.element('icon_info_block_wrapper')}>
                <IconInfoBlock
                  icon={item.icon}
                  text={item.text}
                />
              </div>
              <div className={block.element('seperator')} />
            </React.Fragment>
          ))
        }
      </Col>
    </Row>
  </Container>
);
