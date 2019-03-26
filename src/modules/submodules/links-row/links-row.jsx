// @flow
import * as React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import type { LinksRowsItemsType } from '@/modules/footer';
import './links-row.sass';

type LinksRowProps = {
  linksRowsItems?: Array<LinksRowsItemsType>,
};

const block = createBlock('links-row');

export const LinksRow = ({
  linksRowsItems,
}: LinksRowProps) => (
  <Container className={block.block()}>
    <Row className={block.element('row')}>
      <Col lg="12" className={block.element('center-content')}>
        {
          map(linksRowsItems, (item: LinksRowsItemsType) => (
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
    </Row>
  </Container>
);
