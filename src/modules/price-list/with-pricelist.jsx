// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';
import { compose } from '@/utils/compose';
import type { PriceListType } from './price-list-types';
import { getPriceListFromStore } from './price-list-selectors';
import { getPriceListFromServer } from './price-list-actions';

type PriceListComponentPropsType = {
  priceList: PriceListType,
  getPriceListFromServer: Function,
};

export const withPriceList = (WrappedComponent: React.ComponentType<*>) => {
  class PriceListComponent extends React.PureComponent<PriceListComponentPropsType> {
    displayName = `with PriceListComponent (${WrappedComponent.displayName || WrappedComponent.name})`;

    componentDidMount =() => {
      if (isEmpty(this.props.priceList)) {
        this.props.getPriceListFromServer('message');
      }
    };

    render() {
      return (
        <WrappedComponent
          priceList={this.props.priceList}
        />
      );
    }
  }

  const mapStateToProps = createStructuredSelector({
    priceList: getPriceListFromStore,
  });

  return compose(
    withRouter,
    connect(
      mapStateToProps,
      {
        getPriceListFromServer,
      },
    ),
  )(PriceListComponent);
};
