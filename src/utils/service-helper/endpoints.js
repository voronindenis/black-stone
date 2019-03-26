// @flow
import {
  getProductCards,
  getComments,
  getPriceList,
  getTextures,
} from './stubs';

export type endPointType = {
  name: string,
  description: string,
  isBlocking: boolean,
  stub: boolean,
  stubFunc: Function,
  url: string,
};

export const endPoints = {
  getProductCards: {
    name: 'getProductCards',
    description: 'Получение карт товаров',
    isBlocking: true,
    stub: true,
    stubFunc: getProductCards,
    url: '/proxy/kafka',
  },
  getComments: {
    name: 'getComments',
    description: 'Получение комментариев',
    isBlocking: true,
    stub: true,
    stubFunc: getComments,
    url: '/proxy/kafka',
  },
  getPriceList: {
    name: 'getPriceList',
    description: 'Получение списка цен',
    isBlocking: true,
    stub: true,
    stubFunc: getPriceList,
    url: '/proxy/kafka',
  },
  getTextures: {
    name: 'getTextures',
    description: 'Получение списка текстур',
    isBlocking: true,
    stub: true,
    stubFunc: getTextures,
    url: '/proxy/kafka',
  },
};
