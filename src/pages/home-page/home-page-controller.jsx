// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from '@/utils/compose';
import { setFilterMethod, withCatalog } from '@/modules/catalog';
import type { ProductCardsType } from '@/modules/catalog';
import { HomePage } from './home-page';

type HomePageControllerComponentPropsType = {
  // parentProps
  productCards: ProductCardsType[],
  filterMethod: string,
  // connectProps
  setFilterMethod: Function,
};

class HomePageControllerComponent extends React.PureComponent<HomePageControllerComponentPropsType> {
  componentWillUnmount() {
    this.props.setFilterMethod('');
  }

  render() {
    return (
      <HomePage productCards={this.props.productCards} />
    );
  }
}

export const HomePageController = compose(
  withCatalog,
  connect(
    null,
    {
      setFilterMethod,
    },
  )
)(HomePageControllerComponent);
