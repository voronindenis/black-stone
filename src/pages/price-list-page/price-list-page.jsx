// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'semantic-ui-react';
import { map, get } from 'lodash';
import cn from 'classnames';
import { PATH } from '@/routes';
import { createBlock } from '@/utils/bem-helper';
import { Button } from '@/components/buttons/button';
import { SimpleHeadingOfPage } from '@/modules/simple-heading-of-page';
import type {
  PriceListType,
  PriceListValuesType,
  PriceForWorksType,
  SubspeciesOfWorksType,
  ManufacturersPriceListType,
} from '@/modules/price-list';
import { PRICE_FOR_WORKS } from './price-list-page-constants';
import './assets/price-list-page.sass';

const block = createBlock('price-list-page-content');

type PriceListPagePropsType = {
  priceList: PriceListType,
};

export const PriceListPage = (props: PriceListPagePropsType) => (
  <div className={block.block()}>
    <Container className={block.element('container')}>
      <Row className={block.element('row')}>
        <SimpleHeadingOfPage
          title="Прайс-лист"
          description="Величина стоимости заказа на акриловую столешницу зависит от толщины и характеристик материала.
            Чем толще изделие и больше акрилового полимера затрачивается, тем она выше."
        />
      </Row>
      <Row className={block.element('row')}>
        <Col lg="12" className={block.element('table_container')}>
          <Table
            celled
            structured
            className={block.element('table')}
            verticalAlign="middle"
            textAlign="center"
            padded
          >
            <Table.Header className={block.element('table_header')}>
              <Table.Row className={block.element('table_header_row')}>
                <Table.HeaderCell width="5" className={block.element('table_header_cell')}>Марка акрилового камня</Table.HeaderCell>
                <Table.HeaderCell width="5" className={block.element('table_header_cell')}>Серия</Table.HeaderCell>
                <Table.HeaderCell width="6" className={block.element('table_header_cell')}>Столешница, (1м2), РУБ</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body className={block.element('table_body')}>
              {
                map(get(props, ['priceList', 'manufacturersPriceList']), (item: ManufacturersPriceListType) => (
                  <React.Fragment key={item.id}>
                    <Table.Row className={block.element('table_body_row')}>
                      <Table.Cell width="5" rowSpan={item.priceListValues.length + 1} className={block.element('table_body_cell')}>
                        <img className={block.element('cell_image')} src={item.image} alt={item.title} />
                      </Table.Cell>
                    </Table.Row>
                    <React.Fragment>
                      {
                        map(item.priceListValues, (priceListValue: PriceListValuesType) => (
                          <Table.Row
                            key={Math.random()}
                            className={
                              cn(
                                block.element('table_body_row'),
                                block.modifyElement('table_body_row', item.title.charAt(0).toLowerCase() + item.title.slice(1))
                              )
                            }
                          >
                            <Table.Cell width="5" className={block.element('table_body_cell')}>
                              {priceListValue.series}
                            </Table.Cell>
                            <Table.Cell width="6" className={block.element('table_body_cell')}>
                              {priceListValue.price}
                            </Table.Cell>
                          </Table.Row>
                        ))
                      }
                    </React.Fragment>
                  </React.Fragment>
                ))
              }
            </Table.Body>
          </Table>
        </Col>
      </Row>
      <Row className={block.element('row')}>
        <Col lg="7" className={block.element('prices_for_works_description_container')}>
          <h3 className={block.element('prices_for_works_title')}>Цены по работам</h3>
          <p className={block.element('prices_for_works_description')}>
            Нужно рассчитать стоимость столешницы из искусственного камня, чтобы спланировать бюджет
            и предстоящие затраты? Воспользуйтесь информацией в прайс-листе и рассчитайте стоимость
            изготовления столешницы из искусственного камня, цены на дополнительные услуги и материалы прямо сейчас.
          </p>
          <Link to={PATH.calculator}>
            <Button
              type="primary"
              label="Онлайн калькулятор"
            />
          </Link>
        </Col>
        <Col lg="5" className={block.element('prices_for_works')}>
          {
            map(PRICE_FOR_WORKS, (work: PriceForWorksType) => (
              <React.Fragment key={work.id}>
                <p className={block.element('price_of_work')}>
                  {`${work.id}. ${work.text}`}
                </p>
                {
                  work.subspecies
                    ? map(work.subspecies, (subspecies: SubspeciesOfWorksType) => (
                      <p key={subspecies.id} className={block.element('price_of_subspecies')}>
                        {`${subspecies.id}) ${subspecies.text}`}
                      </p>
                    ))
                    : null
                }
              </React.Fragment>
            ))
          }
        </Col>
      </Row>
    </Container>
  </div>
);
