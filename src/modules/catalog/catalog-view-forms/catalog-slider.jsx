// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import cn from 'classnames';
import { PATH } from '@/routes';
import { createBlock } from '@/utils/bem-helper';
import { createLink } from '@/utils/route-utils';
import { Button } from '@/components/buttons/button';
import { PreviewProductCard } from '@/components/preview-product-card';
import type { ProductCardsType } from '../catalog-types';
import './assets/catalog-view-forms.sass';

const block = createBlock('catalog-slider');

type CatalogSliderPropsType = {
  productCards: ProductCardsType[],
};

type CatalogSliderStateType = {
  widthOfScrollArea: number,
  position: number,
};

export class CatalogSlider extends React.PureComponent<CatalogSliderPropsType, CatalogSliderStateType> {
  scrollArea: any = React.createRef();

  state = {
    widthOfScrollArea: 0,
    position: 0,
  };

  componentDidMount() {
    if (this.props.productCards) {
      this.setState({
        widthOfScrollArea: this.widthCalculationOfScroll(this.scrollArea.offsetWidth, this.props.productCards.length),
      });
    }
  }

  componentDidUpdate = (prevProps: CatalogSliderPropsType) => {
    if (prevProps.productCards !== this.props.productCards) {
      this.setState({
        widthOfScrollArea: this.widthCalculationOfScroll(this.scrollArea.offsetWidth, this.props.productCards.length),
      });
    }
  };

  getWidthOneProductCard() {
    return Math.round(this.scrollArea.offsetWidth * 0.33);
  }

  widthCalculationOfScroll = (objWidth: number, objNumbers: number) => (
    Math.round(objWidth * 0.33) * objNumbers - objWidth
  );

  handleClickOnRightArrow = () => {
    const { widthOfScrollArea } = this.state;
    this.setState(
      (prevState: CatalogSliderStateType) => {
        if (prevState.position < widthOfScrollArea) {
          return { position: prevState.position + this.getWidthOneProductCard() };
        }
      }
    );
  };

  handleClickOnLeftArrow = () => {
    this.setState(
      (prevState: CatalogSliderStateType) => {
        if (prevState.position !== 0) {
          return { position: prevState.position - this.getWidthOneProductCard() };
        }
      }
    );
  };

  setScrollArea = (node: any) => this.scrollArea = node;

  render() {
    const { widthOfScrollArea, position } = this.state;
    return (
      <div className={block.block()}>
        <Container className={block.element('container')}>
          <Row className={block.element('control_arrows_row')}>
            <Col lg="2" className={block.element('left_arrow_container')}>
              {
                this.props.productCards.length > 3 && (
                  <a
                    onClick={this.handleClickOnLeftArrow}
                    className={
                      cn(
                        block.element('left_arrow'),
                        position === 0 ? block.modifyElement('left_arrow', 'disabled') : null,
                      )
                    }
                  />
                )
              }
            </Col>
            <Col lg="8" className={block.element('title_container')}>
              <h1 className={block.element('title')}>
                Наши работы
              </h1>
            </Col>
            <Col lg="2" className={block.element('right_arrow_container')}>
              {
                this.props.productCards.length > 3 && (
                  <a
                    onClick={this.handleClickOnRightArrow}
                    className={
                      cn(
                        block.element('right_arrow'),
                        position >= widthOfScrollArea ? block.modifyElement('right_arrow', 'disabled') : null,
                      )
                    }
                  />
                )
              }
            </Col>
          </Row>
          <Row className={block.element('scroll_area_row')}>
            <Col lg="12" className={block.element('scroll_area_container')}>
              <div
                ref={this.setScrollArea}
                className={block.element('scroll_area_wrap')}
              >
                <div
                  style={{ left: `-${position}px` }}
                  className={block.element('scroll_area')}
                >
                  {
                    map(this.props.productCards, (productCard: ProductCardsType) => (
                      <PreviewProductCard
                        key={productCard.id}
                        image={productCard.image}
                        title={productCard.title}
                        price={productCard.price}
                        link={createLink(productCard.category, productCard.id) || '/'}
                      />
                    ))
                  }
                </div>
              </div>
            </Col>
          </Row>
          <Row className={block.element('button_row')}>
            <Col lg="12" className={block.element('button_container')}>
              <div className={block.element('button_wrapper')}>
                <Link
                  to={PATH.catalog}
                >
                  <Button
                    type="primary"
                    label="Смотреть остальные работы"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
