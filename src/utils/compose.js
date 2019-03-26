// @flow

// NOTE Function usage: compose(hoc1, hoc2, hoc3)(BaseComponent)
export const compose = (...funcs: Array<Function>) => funcs.reduce(
  (a: Function, b: Function) => (...args: any) => a(b(...args)),
  (arg: any): any => arg,
);
