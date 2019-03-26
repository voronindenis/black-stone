// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { map, uniq } from 'lodash';
import { compose } from '@/utils/compose';
import { withCatalog, setFilterMethod } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { FILTER_METHOD } from './countertops-page-constants';
import { CountertopsPage } from './countertops-page';

type CountertopsPageControllerComponentPropsType = {
  // parentProps
  productCards: ProductCardsType[],
  // connectProps
  setFilterMethod: Function,
};

class CountertopsPageControllerComponent extends React.PureComponent<CountertopsPageControllerComponentPropsType> {
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
      <CountertopsPage productCards={this.isFiltering()} />
    );
  }
}

export const CountertopsPageController = compose(
  withCatalog,
  connect(
    null,
    {
      setFilterMethod,
    },
  )
)(CountertopsPageControllerComponent);
