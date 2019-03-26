// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { map } from 'lodash';
import { createBlock } from '@/utils/bem-helper';
import { TabButton } from '@/components/buttons/tab-button';
import { Catalog } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { TAB_ITEMS } from './catalog-page-constants';
import type { TabItemsType } from './catalog-page-types';
import './assets/catalog-page.sass';

const block = createBlock('catalog-page-content');

type CatalogPagePropsType = {
  productCards: ProductCardsType[],
  setFilterMethod: Function,
  filterMethod: string,
};

export const CatalogPage = (props: CatalogPagePropsType) => {
  const handleClick = (filterMethod:string) => props.setFilterMethod(filterMethod);

  return (
    <Container fluid className={block.block()}>
      <Row className={block.element('row')}>
        <Col lg="12" className={block.element('buttons_container')}>
          {
            map(TAB_ITEMS, (tab: TabItemsType) => (
              <TabButton
                key={tab.id}
                className={block.element('button')}
                label={tab.text}
                onClick={() => handleClick(tab.filterMethod)}
                active={props.filterMethod === tab.filterMethod}
              />
            ))
          }
        </Col>
      </Row>
      <Row className={block.element('row')}>
        <Col lg="12" className={block.element('cards_container')}>
          <Catalog productCards={props.productCards} />
        </Col>
      </Row>
    </Container>
  );
};
