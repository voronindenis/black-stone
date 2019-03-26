// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { map, uniq } from 'lodash';
import { compose } from '@/utils/compose';
import { withCatalog, setFilterMethod } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { FILTER_METHOD } from './bar-counters-page-constants';
import { BarCountersPage } from './bar-counters-page';

type BarCountersPageControllerComponentPropsType = {
  // parentProps
  productCards: ProductCardsType[],
  // connectProps
  setFilterMethod: Function,
};

class BarCountersPageControllerComponent extends React.PureComponent<BarCountersPageControllerComponentPropsType> {
  componentDidMount() {
    this.props.setFilterMethod(FILTER_METHOD);
  }

  componentWillUnmount() {
    this.props.setFilterMethod('');
  }

  isFiltering = () => {
    const categories = uniq(map(this.props.productCards, (productCard:ProductCardsType) => productCard.category));
    if (categories.length === 1) {
      return this.props.productCards;
    }
    return [];
  };

  render() {
    return (
      <BarCountersPage productCards={this.isFiltering()} />
    );
  }
}

export const BarCountersPageController = compose(
  withCatalog,
  connect(
    null,
    {
      setFilterMethod,
    },
  )
)(BarCountersPageControllerComponent);
