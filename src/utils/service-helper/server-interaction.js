// @flow
import type { Dispatch } from 'redux';
import { block, unblock } from '@/modules/blocking-loader';
import type { endPointType } from './endpoints';

export const sendMessage = (
  endpoint: endPointType,
  message: any,
  dispatch: Dispatch<*>,
) => {
  // $FlowIgnore
  const promise = new Promise((resolve) => {
    if (endpoint.isBlocking && dispatch) {
      dispatch(block(endpoint.name));
    }
    if (endpoint.stub) {
      return setTimeout(() => {
        if (endpoint.isBlocking && dispatch) {
          dispatch(unblock(endpoint.name));
        }
        resolve(endpoint.stubFunc(message));
      }, 2000);
    }
  });
  return promise;
};
