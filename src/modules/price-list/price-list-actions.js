// @flow
import type { Dispatch } from 'redux';
import { sendMessage } from '@/utils/service-helper/server-interaction';
import { endPoints } from '@/utils/service-helper/endpoints';
import type { PriceListType } from './price-list-types';

const PRICE_LIST_NAMESPACE = '@@price-list';

export const SET_PRICE_LIST = `${PRICE_LIST_NAMESPACE}/SET_PRICE_LIST`;

const setPriceListAction = (priceList: PriceListType[]) => ({
  type: SET_PRICE_LIST,
  payload: priceList,
});

export const getPriceListFromServer = (message: string) => (dispatch: Dispatch<*>) => {
  console.log(endPoints.getPriceList.name, 'Начало запроса с параметрами:', message);
  return sendMessage(endPoints.getPriceList, message, dispatch)
    .then((response: PriceListType[] | any) => {
      if (response.error) {
        throw new Error(response.error);
      }
      console.log(endPoints.getPriceList.name, 'Получен ответ:', response);
      dispatch(setPriceListAction(response));
      return response;
    })
    .catch((e: { error?: string, message?: string }) => {
      console.log(endPoints.getPriceList.name, 'Ошибка запроса', e.error || e.message);
    });
};
