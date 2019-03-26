// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from '@/utils/compose';
import { withCatalog, setFilterMethod, getFilterMethod } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { CatalogPage } from './catalog-page';

type CatalogPageControllerComponentPropsType = {
  // parentProps
  productCards: ProductCardsType[],
  // connectProps
  setFilterMethod: Function,
  filterMethod: string,
};

class CatalogPageControllerComponent extends React.PureComponent<CatalogPageControllerComponentPropsType> {
  render() {
    return (
      <CatalogPage
        productCards={this.props.productCards}
        setFilterMethod={this.props.setFilterMethod}
        filterMethod={this.props.filterMethod}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  filterMethod: getFilterMethod,
});

export const CatalogPageController = compose(
  withCatalog,
  connect(
    mapStateToProps,
    {
      setFilterMethod,
    },
  )
)(CatalogPageControllerComponent);
