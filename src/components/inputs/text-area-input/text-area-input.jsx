// @flow
import * as React from 'react';
import { TextArea } from 'semantic-ui-react';
import cn from 'classnames';
import { createBlock } from '@/utils/bem-helper';
import './text-area-input.sass';

const block = createBlock('text-area-input');

type TextAreaInputPropsType = {
  className?: string;
};

export const TextAreaInput = (props: TextAreaInputPropsType) => (
  <div className={cn(props.className, block.block())}>
    <TextArea
      placeholder="Сообщение"
      rows="6"
    />
  </div>
);
