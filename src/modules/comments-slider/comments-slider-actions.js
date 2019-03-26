// @flow
import type { Dispatch } from 'redux';
import { sendMessage } from '@/utils/service-helper/server-interaction';
import { endPoints } from '@/utils/service-helper/endpoints';
import type { CommentsType } from './comments-slider-types';

const COMMENTS_NAMESPACE = '@@comments';

export const SET_COMMENTS = `${COMMENTS_NAMESPACE}/SET_COMMENTS`;

const setCommentsAction = (comments: CommentsType[]) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const getCommentsFromServer = (message: string) => (dispatch: Dispatch<*>) => {
  console.log(endPoints.getComments.name, 'Начало запроса с параметрами:', message);
  return sendMessage(endPoints.getComments, message, dispatch)
    .then((response: CommentsType[] | any) => {
      if (response.error) {
        throw new Error(response.error);
      }
      console.log(endPoints.getComments.name, 'Получен ответ:', response);
      dispatch(setCommentsAction(response));
      return response;
    })
    .catch((e: { error?: string, message?: string }) => {
      console.log(endPoints.getComments.name, 'Ошибка запроса', e.error || e.message);
    });
};
