// @flow
import type { Dispatch } from 'redux';
import { sendMessage } from '@/utils/service-helper/server-interaction';
import { endPoints } from '@/utils/service-helper/endpoints';
import type { ProductCardsType } from './catalog-types';

const CATALOG_NAMESPACE = '@@catalog';

export const SET_PRODUCT_CARDS = `${CATALOG_NAMESPACE}/SET_PRODUCT_CARDS`;
export const SET_FILTER_METHOD = `${CATALOG_NAMESPACE}/SET_FILTER_METHOD`;

const setProductCardsAction = (productCards: ProductCardsType[]) => ({
  type: SET_PRODUCT_CARDS,
  payload: productCards,
});

export const getProductCardsFromServer = (message: string) => (dispatch: Dispatch<*>) => {
  console.log(endPoints.getProductCards.name, 'Начало запроса с параметрами:', message);
  return sendMessage(endPoints.getProductCards, message, dispatch)
    .then((response: ProductCardsType[] | any) => {
      if (response.error) {
        throw new Error(response.error);
      }
      console.log(endPoints.getProductCards.name, 'Получен ответ:', response);
      dispatch(setProductCardsAction(response));
      return response;
    })
    .catch((e: { error?: string, message?: string }) => {
      console.log(endPoints.getProductCards.name, 'Ошибка запроса', e.error || e.message);
    });
};

export const setFilterMethod = (method: string) => ({
  type: SET_FILTER_METHOD,
  payload: method,
});
