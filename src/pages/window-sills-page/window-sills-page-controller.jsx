// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { map, uniq } from 'lodash';
import { compose } from '@/utils/compose';
import { withCatalog, setFilterMethod } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { FILTER_METHOD } from './window-sills-page-constants';
import { WindowSillsPage } from './window-sills-page';

type WindowSillsPageControllerComponentPropsType = {
  // parentProps
  productCards: ProductCardsType[],
  filterMethod: string,
  // connectProps
  setFilterMethod: Function,
};

class WindowSillsPageControllerComponent extends React.PureComponent<WindowSillsPageControllerComponentPropsType> {
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
      <WindowSillsPage productCards={this.isFiltering()} />
    );
  }
}

export const WindowSillsPageController = compose(
  withCatalog,
  connect(
    null,
    {
      setFilterMethod,
    },
  )
)(WindowSillsPageControllerComponent);
