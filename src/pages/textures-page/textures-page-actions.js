// @flow
import type { Dispatch } from 'redux';
import { sendMessage } from '@/utils/service-helper/server-interaction';
import { endPoints } from '@/utils/service-helper/endpoints';
import type { TexturesType } from './textures-page-types';

const TEXTURES_NAMESPACE = '@@textures';

export const SET_TEXTURES = `${TEXTURES_NAMESPACE}/SET_TEXTURES`;

const setTexturesAction = (textures: TexturesType[]) => ({
  type: SET_TEXTURES,
  payload: textures,
});

export const getTexturesFromServer = (message: string) => (dispatch: Dispatch<*>) => {
  console.log(endPoints.getTextures.name, 'Начало запроса с параметрами:', message);
  return sendMessage(endPoints.getTextures, message, dispatch)
    .then((response: TexturesType[] | any) => {
      if (response.error) {
        throw new Error(response.error);
      }
      console.log(endPoints.getTextures.name, 'Получен ответ:', response);
      dispatch(setTexturesAction(response));
      return response;
    })
    .catch((e: { error?: string, message?: string }) => {
      console.log(endPoints.getTextures.name, 'Ошибка запроса', e.error || e.message);
    });
};
