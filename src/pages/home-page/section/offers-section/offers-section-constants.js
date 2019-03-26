// @flow
import {
  COUNTERTOP_ROUTE,
  WINDOW_SILLS_ROUTE,
  SINKS_ROUTE,
  BAR_COUNTERS_ROUTE,
  TABLES_ROUTE,
} from '@/constants';

import BAR_COUNTERS_IMAGE from './assets/img-for-links/bar-counters.jpg';
import COUNTERTOPS_IMAGE from './assets/img-for-links/countertops.jpg';
import WINDOW_SILLS_IMAGE from './assets/img-for-links/window-sills.jpg';
import TABLES_IMAGE from './assets/img-for-links/tables.jpg';
import SINKS_IMAGE from './assets/img-for-links/sinks.jpg';

export const OFFER_LINKS = [
  {
    id: '1',
    title: 'Барные стойки',
    img: BAR_COUNTERS_IMAGE,
    link: BAR_COUNTERS_ROUTE,
    width: '4',
  },
  {
    id: '2',
    title: 'Кухонные столешницы',
    img: COUNTERTOPS_IMAGE,
    link: COUNTERTOP_ROUTE,
    width: '8',
  },
  {
    id: '3',
    title: 'Подоконники',
    img: WINDOW_SILLS_IMAGE,
    link: WINDOW_SILLS_ROUTE,
    width: '4',
  },
  {
    id: '4',
    title: 'Столы',
    img: TABLES_IMAGE,
    link: TABLES_ROUTE,
    width: '4',
  },
  {
    id: '5',
    title: 'Мойки',
    img: SINKS_IMAGE,
    link: SINKS_ROUTE,
    width: '4',
  },
];
