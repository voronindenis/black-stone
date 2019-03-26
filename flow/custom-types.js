// @Flow
/* eslint-disable */
import { ApplicationStateTypes } from '../src/reducers';

declare type Action = {
  type: $Subtype<string>,
  payload?: any
};

declare type GetState = () => ApplicationStateTypes;

declare module 'history/createBrowserHistory' {
  declare module.exports: any;
}

declare module 'react-iframe' {
  declare module.exports: any;
}
