// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { filter, isEmpty } from 'lodash';
import { compose } from '@/utils/compose';
import { getProductCardsFromStore, getFilterMethod } from './catalog-selectors';
import { getProductCardsFromServer } from './catalog-actions';
import type { ProductCardsType } from './catalog-types';

type CatalogComponentPropsType = {
  getProductCardsFromServer: (message: string) => Promise<*>,
  productCards: ProductCardsType[],
  filterMethod: string,
};

type CatalogComponentStateType = {
  productCards: ProductCardsType[],
};

export const withCatalog = (WrappedComponent: React.ComponentType<*>) => {
  class CatalogComponent extends React.PureComponent<CatalogComponentPropsType, CatalogComponentStateType> {
    displayName = `with CatalogComponent (${WrappedComponent.displayName || WrappedComponent.name})`;

    state = {
      productCards: [],
    };

    componentDidMount =() => {
      if (isEmpty(this.props.productCards)) {
        this.props.getProductCardsFromServer('message');
      } else {
        this.isFilter();
      }
    };

    componentDidUpdate = (prevProps: CatalogComponentPropsType) => {
      const { productCards, filterMethod } = this.props;
      if (prevProps.productCards !== productCards) {
        this.isFilter();
      }
      if (prevProps.filterMethod !== filterMethod) {
        this.setState({
          productCards: [],
        });
        setTimeout(() => this.isFilter(), 1);
      }
    };

    isFilter = () => {
      const { productCards, filterMethod } = this.props;
      if (filterMethod) {
        this.setState({
          productCards: filter(
            productCards, (productCard: ProductCardsType) => productCard.category === filterMethod,
          ),
        });
      } else {
        this.setState({
          productCards,
        });
      }
    };

    render() {
      if (this.state.productCards) {
        return (
          <WrappedComponent
            productCards={this.state.productCards}
          />
        );
      }
      return null;
    }
  }

  const mapStateToProps = createStructuredSelector({
    productCards: getProductCardsFromStore,
    filterMethod: getFilterMethod,
  });

  const mapDispatchToProps = {
    getProductCardsFromServer,
  };

  return compose(
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )(CatalogComponent);
};
