// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { map, uniq } from 'lodash';
import { compose } from '@/utils/compose';
import { withCatalog, setFilterMethod } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { FILTER_METHOD } from './sinks-page-constants';
import { SinksPage } from './sinks-page';

type SinksPageControllerComponentPropsType = {
  // parentProps
  productCards: ProductCardsType[],
  // connectProps
  setFilterMethod: Function,
};

class SinksPageControllerComponent extends React.PureComponent<SinksPageControllerComponentPropsType> {
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
      <SinksPage productCards={this.isFiltering()} />
    );
  }
}

export const SinksPageController = compose(
  withCatalog,
  connect(
    null,
    {
      setFilterMethod,
    },
  )
)(SinksPageControllerComponent);
