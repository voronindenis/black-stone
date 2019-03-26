// @flow

const BLOCKING_REQUESTS_LOADER_ACTIONS_NAMESPACE = '@@blocking-requests-loader';
const namespaceActionType = (type: string) => `${BLOCKING_REQUESTS_LOADER_ACTIONS_NAMESPACE}/${type}`;

export const BLOCK = namespaceActionType('BLOCK');
export const block = (requestName: string) => ({
  type: BLOCK,
  payload: requestName,
});

export const UNBLOCK = namespaceActionType('UNBLOCK');
export const unblock = (requestName: string) => ({
  type: UNBLOCK,
  payload: requestName,
});
