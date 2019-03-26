// @flow

export type CommentsType = {
  id: string,
  autor: string,
  text: string,
};

export type CommentsStateType = {
  comments: CommentsType[],
};
