// @flow
import * as React from 'react';
// $FlowIgnore
import { CSSTransitionGroup } from 'react-transition-group';
import { map } from 'lodash';
import { createBlock } from '@/utils/bem-helper';
import { createLink } from '@/utils/route-utils';
import { PreviewProductCard } from '@/components/preview-product-card';
import type { ProductCardsType } from '../catalog-types';
import './assets/catalog-view-forms.sass';

const block = createBlock('catalog-range');

type CatalogRangePropsType = {
  productCards: ProductCardsType[],
};

type CatalogRangeStateType = {
  widthOfScrollArea: number,
  rangeValue: string,
};

export class CatalogRange extends React.PureComponent<CatalogRangePropsType, CatalogRangeStateType> {
  scrollArea: any = React.createRef();

  state = {
    widthOfScrollArea: 0,
    rangeValue: '0',
  };

  componentDidUpdate = (prevProps: CatalogRangePropsType) => {
    if (prevProps.productCards !== this.props.productCards) {
      this.setState({
        widthOfScrollArea: this.widthCalculationOfScroll(this.scrollArea.offsetWidth, this.props.productCards.length),
      });
    }
  };

  widthCalculationOfScroll = (objWidth: number, objNumbers: number) => (objWidth * 0.33 * objNumbers) - objWidth;

  handleRangeChange = (e:any) => {
    this.setState({
      rangeValue: e.target.value,
    });
  };

  setScrollArea = (node: any) => this.scrollArea = node;

  render() {
    const { widthOfScrollArea, rangeValue } = this.state;
    return (
      <div className={block.block()}>
        <div
          ref={this.setScrollArea}
          className={block.element('scroll_area_wrap')}
        >
          <div
            style={{ left: `-${rangeValue}px` }}
            className={block.element('scroll_area')}
          >
            <CSSTransitionGroup
              className={block.element('transition')}
              transitionName="product-cards"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
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
            </CSSTransitionGroup>
          </div>
        </div>
        <CSSTransitionGroup
          transitionName="input_range"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {
            this.props.productCards.length > 3 && (
              <div className={block.element('input_range')}>
                <input type="range" min="0" max={widthOfScrollArea} step="1" value={rangeValue} onChange={this.handleRangeChange} />
              </div>
            )
          }
        </CSSTransitionGroup>
      </div>
    );
  }
}
