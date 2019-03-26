// @flow
import * as React from 'react';
import { map } from 'lodash';
import cn from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import type { centerContentType } from './row-info-block-types';
import './row-info-block.sass';

type InfoBlockProps = {
  leftContent: React.Element<*>,
  rightContent: React.Element<*>,
  centerContent: centerContentType[],
  backGroundColor?: boolean,
};

const block = createBlock('row-info-block');

export const RowInfoBlock = ({
  leftContent,
  rightContent,
  centerContent,
  backGroundColor,
}: InfoBlockProps) => (
  <Container
    className={backGroundColor
      ? cn(block.block(), block.modifyBlock('back-ground-color-control'))
      : block.block()}
  >
    <Row className={block.element('row')}>
      <Col lg="3" className={block.element('left-content')}>
        {leftContent}
      </Col>
      <Col lg="6" className={block.element('center-content')}>
        {
          map(centerContent, (item: centerContentType) => (
            <img
              key={item.id}
              src={item.img}
              alt={item.title}
              className={centerContent.length === 1
                ? block.element('center-content')
                : cn(block.element('center-content'), block.modifyElement(block.element('center-content'), 'size-control'))
              }
            />
          ))
        }
      </Col>
      <Col lg="3" className={block.element('right-content')}>
        {rightContent}
      </Col>
    </Row>
  </Container>
);
