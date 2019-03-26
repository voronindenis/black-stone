// @flow
import {
  COUNTERTOP_ROUTE,
  WINDOW_SILLS_ROUTE,
  SINKS_ROUTE,
  BAR_COUNTERS_ROUTE,
  TABLES_ROUTE,
  CATALOG_ROUTE,
  PRICE_ROUTE,
  CONTACTS_ROUTE,
  TEXTURES_ROUTE,
  CALCULATOR_ROUTE,
} from '@/constants';
import { HomePage } from '@/pages/home-page';
import { CountertopsPage } from '@/pages/countertops-page';
import { BarCountersPage } from '@/pages/bar-counters-page';
import { WindowSillsPage } from '@/pages/window-sills-page';
import { SinksPage } from '@/pages/sinks-page';
import { TablesPage } from '@/pages/tables-page';
import { CatalogPage } from '@/pages/catalog-page';
import { ProductCardPage } from '@/pages/product-card-page';
import { ContactsPage } from '@/pages/contacts-page';
import { PriceListPage } from '@/pages/price-list-page';
import { TexturesPage } from '@/pages/textures-page';
import { CalculatorPage } from '@/pages/calculator-page';

export const PATH = {
  countertops: `/${COUNTERTOP_ROUTE}`,
  windowSills: `/${WINDOW_SILLS_ROUTE}`,
  sinks: `/${SINKS_ROUTE}`,
  barCounters: `/${BAR_COUNTERS_ROUTE}`,
  tables: `/${TABLES_ROUTE}`,
  catalog: `/${CATALOG_ROUTE}`,
  price: `/${PRICE_ROUTE}`,
  contacts: `/${CONTACTS_ROUTE}`,
  textures: `/${TEXTURES_ROUTE}`,
  calculator: `/${CALCULATOR_ROUTE}`,
};

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: PATH.catalog,
    component: CatalogPage,
    exact: false,
  },
  {
    path: PATH.contacts,
    component: ContactsPage,
    exact: false,
  },
  {
    path: PATH.textures,
    component: TexturesPage,
    exact: false,
  },
  {
    path: PATH.price,
    component: PriceListPage,
    exact: false,
  },
  {
    path: PATH.calculator,
    component: CalculatorPage,
    exact: false,
  },
  {
    path: PATH.countertops,
    component: CountertopsPage,
    exact: false,
  },
  {
    path: PATH.barCounters,
    component: BarCountersPage,
    exact: false,
  },
  {
    path: PATH.windowSills,
    component: WindowSillsPage,
    exact: false,
  },
  {
    path: PATH.sinks,
    component: SinksPage,
    exact: false,
  },
  {
    path: PATH.tables,
    component: TablesPage,
    exact: false,
  },
  {
    path: `${PATH.countertops}/:id`,
    component: ProductCardPage,
  },
  {
    path: `${PATH.barCounters}/:id`,
    component: ProductCardPage,
  },
  {
    path: `${PATH.windowSills}/:id`,
    component: ProductCardPage,
  },
  {
    path: `${PATH.sinks}/:id`,
    component: ProductCardPage,
  },
  {
    path: `${PATH.tables}/:id`,
    component: ProductCardPage,
  },
];
