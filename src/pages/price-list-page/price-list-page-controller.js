// @flow
import { compose } from '@/utils/compose';
import { withPriceList } from '@/modules/price-list';
import { PriceListPage } from './price-list-page';

export const PriceListController = compose(
  withPriceList,
)(PriceListPage);
