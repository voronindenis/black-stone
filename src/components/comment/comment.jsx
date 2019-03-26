import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import './comment.sass';

const block = createBlock('comment');

type commentPropsType = {
  autor: string,
  text: string,
};

export const Comment = (props: commentPropsType) => (
  <div className={block.block()}>
    <p className={block.element('autor')}>
      {props.autor}
    </p>
    <span className={block.element('divider')} />
    <p className={block.element('text')}>
      {props.text}
    </p>
  </div>
);
