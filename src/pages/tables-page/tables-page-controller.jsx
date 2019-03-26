// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { map, uniq } from 'lodash';
import { compose } from '@/utils/compose';
import { withCatalog, setFilterMethod } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { FILTER_METHOD } from './tables-page-constants';
import { TablesPage } from './tables-page';


type TablesPageControllerComponentPropsType = {
  // parentProps
  productCards: ProductCardsType[],
  // connectProps
  setFilterMethod: Function,
};

class TablesPageControllerComponent extends React.PureComponent<TablesPageControllerComponentPropsType> {
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
      <TablesPage productCards={this.isFiltering()} />
    );
  }
}

export const TablesPageController = compose(
  withCatalog,
  connect(
    null,
    {
      setFilterMethod,
    },
  )
)(TablesPageControllerComponent);
